import cookieParser from 'cookie-parser';


/**
 * To use router, insert index.routes.js into your folder returning array of routes in following format:
 *
 * Common argument:
 * @param url - url to resource
 * @param *condition - takes request, the router will be applied if condition passes, otherwise - not
 *
 * Manual handled requests:
 *   to use manually handled requests, pass
 * @param handler - default router callback
 *
 * Example, returns text from agreementPopupText when key matches given, or just ignores route:
 * module.exports = [{
 *   url: '/shop/sitetext',
 *   handler: (req, res, next) => {
 *     if (req.query.key === 'SHOP_BASKET_SALES_AGREEMENT_POPUP') {
 *       res.sendFile(require.resolve('./stubs/agreementPopupText.htm'));
 *     } else {
 *       next();
 *     }
 *   },
 * }];
 * ---------------------------------------------------------
 *
 * Automatically handled requests with crawler:
 *   this mode activates if handler is not defined,
 *   it automatically crawls resource when appropriate stub doesn't exist
 *   encode requests into a filename to store result and decodes back
 *   when force crawling is used through npm run crawler
 * @param *type determines type of actions applied to route, if `model` given, it will read page model
 *   if htm is used, it will use '.htm' extension to keep file
 *   if proxy is used, all the methods, aka getQuery, getBody etc get `req` as first argument, instead of `slug`
 *
 * @param *Component - React root component, if omitted in `model` mode, the value in model.componentName will be used
 * @param getSlug: takes (req, res) as arguments, returns unique resource
 *   slug to be stored both in stabs and stabs/__list file
 * @param getUrl - takes slug, returns url for request, by default url param is used
 * @param getBody - takes slug, returns body object
 * @param getHeaders - takes slug, returns headers object
 * @param getQuery - takes slug, returns query object
 *
 * Example, same router as above, but with auto crawling:
 * module.exports = [{
 *   url: '/shop/sitetext/',
 *   condition: req => req.query.key === 'SHOP_BASKET_SALES_AGREEMENT_POPUP',
 *   getSlug: () => 'agreementPopupText',
 *   getQuery: () => ({ key: 'SHOP_BASKET_SALES_AGREEMENT_POPUP' }),
 *   type: 'htm',
 * }];
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const bodyParser = require('body-parser');
const render = require('./renderer');
const { composeLoggers, composeRequestDecoder } = require('./utils');

/**
 * Require all of the .router files throughout the project
 * and add them to routing, with provided Component and data.
 * If data is unavailable, we download it and add to crawler config
 */
module.exports = (app) => {
  glob.sync(path.resolve(__dirname, './routes/*.routes.js')).forEach((file) => {
    let routes;
    try {
      // eslint-disable-next-line import/no-dynamic-require
      routes = require(file);
    } catch (err) {
      throw err;
    }
    const dirName = path.dirname(file);
    routes.forEach(({ url: requestUrl, condition, handler, Component, method, ...routeArgs }) => {
      const { type = 'json' } = routeArgs;
      /** if url is a string, we convert it to array for unification */
      if (!Array.isArray(requestUrl)) requestUrl = [requestUrl];

      app.all(
        requestUrl,
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        cookieParser(),
        (req, res, next) => {
          if (condition && !condition(req) || method && method !== req.method) {
            next();
            return;
          }

          const { showMessage, showError } = composeLoggers(req, res);
          showMessage(req.url, '\nRequest');

          const decodeRequest = composeRequestDecoder({ ...routeArgs, url: requestUrl, dirName });
          /** fire custom handler if it exists */
          if (handler) {
            try {
              handler(req, res, next);
            } catch (error) {
              showError('Error executing custom handler');
              console.error(error);
            }
            return;
          }

          (async () => {
            let resourceData;
            try {
              /** unpack request data */
              const { filePath, headers } = decodeRequest(req, res);
              if (!fs.existsSync(path.resolve(filePath))) return;
              /** Finally read json model data */
              showMessage(filePath, 'Model');

              resourceData = fs.readFileSync(filePath, 'utf8');
              if (type === 'model' || type === 'json') {
                resourceData = JSON.parse(resourceData);
              }

              if (type === 'redirect') {
                res.redirect(resourceData);
                return;
              } else if (type === 'model') {
                /** parse resourceData as component json */
                const { componentName } = resourceData;
                const model = typeof componentName === 'undefined' ? resourceData : resourceData.model;

                /** if ?_model is passed, just output model data */
                if (typeof req.query._model !== 'undefined') {
                  if (model.header && model.footer && model.body) {
                    // only send body for page model
                    res.send({ ...model, header: '__REMOVED__', footer: '__REMOVED__' });
                  } else {
                    // otherwise just send model
                    res.send(model);
                  }
                  next();
                  return;
                }

                if (typeof Component !== 'undefined') {
                  /** render as react component using Component */
                  render(Component, model)(req, res);
                } else if (typeof componentName !== 'undefined') {
                  /** render as react component using fetched model componentName */
                  render(componentName.replace(/[^.]*/, ''), model)(req, res);
                } else {
                  /** just send model */
                  res.send(model);
                }
              } else if (type === 'json') {
                res.send(resourceData);
              } else { // htm
                /** just send file data */
                res.set(headers).send(resourceData);
              }
            } catch (error) {
              showError(`<div style="color: red"><pre>${error.stack}</pre></div>`);
            }
          })();
        },
      );
    });
  });
};
