const path = require('path');
// const rimraf = require('rimraf');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV !== 'development'; // either production or server
const isDebug = process.env.DEBUG === 'true';
const isHMR = !!process.argv.find(v => v.includes('webpack-dev-server'));

let Visualizer;
if (isDebug) {
  Visualizer = require('webpack-visualizer-plugin');
}

const patchedReactDOM = '@hot-loader/react-dom';


/**
 * build folder will be deleted on server build crash or cancel,
 * this is required to exit full-server mode
 * by simply turning off start:server process
 */

module.exports = {
  entry: {
    bundle: [
      ...isHMR ? [
        'react-hot-loader/patch',
      ] : [],
      patchedReactDOM,

      /** client polyfills not provided by babel */
      'core-js/stable/promise',
      'whatwg-fetch',

      /** global styles and fonts */
      path.resolve(__dirname, './src/styles/styles.pcss'),

      /** application code should come last */
      path.resolve(__dirname, './src'),
    ],
  },

  output: {
    filename: '[name].js',
    publicPath: '/static/',
    path: path.resolve(__dirname, './build'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src'],
    symlinks: false,
    /**
     * Aliases must be listed directly to allow IDE auto import to work properly
     */
    alias: {
      'react-dom': patchedReactDOM,
      components: path.resolve(__dirname, './src/components'),
      enhancers: path.resolve(__dirname, './src/enhancers'),
      pages: path.resolve(__dirname, './src/pages'),
      requests: path.resolve(__dirname, './src/requests'),
      shared: path.resolve(__dirname, './src/shared'),
      store: path.resolve(__dirname, './src/store'),
      styles: path.resolve(__dirname, './src/styles'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },

  module: {
    rules: [
      {
        test: require.resolve('./src'),
        use: [
          { loader: 'expose-loader', options: 'pages' },
          { loader: 'babel-loader?cacheDirectory' },
        ],
      },
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader?cacheDirectory' }],
        include: [
          path.resolve(__dirname, './src'),
          /node_modules[/\\](beeline-react-ui-toolkit)/,
        ],
      },
      {
        test: require.resolve('react'),
        use: [
          { loader: 'expose-loader', options: 'React' },
        ],
      },
      {
        test: require.resolve(patchedReactDOM),
        use: [
          { loader: 'expose-loader', options: 'ReactDOM' },
        ],
      }, {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 512,
              name: 'assets/[hash:base64:10].[ext]',
            },
          },
        ],
      }, {
        test: /\.(eot|ttf|woff2?)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 512,
              name: 'assets/fonts/[name].[ext]',
            },
          },
        ],
      }, {
        test: /\.svg$/,
        use: [{ loader: 'svg-react-loader' }],
      }, {
        test: /\.p?css$/,
        use: ExtractTextPlugin.extract({
          ...isHMR ? {
            fallback: 'style-loader',
          } : {},
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              url: 0,
              localIdentName: `${isProduction ? '' : '[folder]_[local]_'}[hash:base64:4]`,
            },
          }, {
            loader: 'postcss-loader',
          }],
        }),
      },
      {
        test: /\.pug$/,
        use: [{
          loader: 'pug-loader',
          options: { pretty: true },
        }],
      },
    ],
  },

  plugins: [
    ...(isHMR ? [
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ] : []),
    // new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: isHMR, // do not extract css in development
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'www/index.pug',
      templateParameters: {
        Component: 'pages.{{Component}}',
        isProduction: true,
        model: '{{model}}',
      },
      inject: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './www', to: './' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProduction && !isDebug ? "'production'" : "'development'",
      },
    }),
    ...(isDebug ? [
      new Visualizer({
        filename: `./stats.${process.env.NODE_ENV}.htm`,
      }),
    ] : []),
  ],
  devtool: isProduction ? 'source-map' : false,
  stats: {
    colors: true,
    chunks: false,
    children: false,
  },
  devServer: {
    hot: true,
    port: 8081,
    overlay: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: {
      children: false,
      colors: true,
      chunks: false,
    },
  },
};
