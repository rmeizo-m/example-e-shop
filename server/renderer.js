const fs = require('fs');
const path = require('path');


/**
 * JetBrains IDE is so smart that it randomly decides to rename index to something else in this renderer,
 * so we have to come up with funny name composition
 */
const INDEX_PAGE = `${'ind'}${'ex'}`;

/** if we find bundle.css file in build folder, we assume it is production */
const productionBundlePath = path.resolve(__dirname, '../build/bundle.css');

/**
 * Composite function, returns request handler
 * React Html renderer, outputs html template with react render call
 * and server render result if server bundle is available
 * @param Component - name of the root component
 * @param model - page data model
 */
module.exports = (Component, model) => (
  (req, res) => {
    console.assert(typeof Component === 'string', 'Undefined component in call to render');
    console.assert(typeof model === 'object', 'Undefined model in call to render');

    res.render(INDEX_PAGE, {
      Component: `pages.${Component}`,
      isProduction: fs.existsSync(productionBundlePath),
      model: JSON.stringify(model),
    });
  }
);
