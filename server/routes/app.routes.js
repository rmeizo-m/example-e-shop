module.exports = [{
  // url: ['/', '/catalog'],
  // handler: (req, res) => res.redirect('/catalog/men'),
// }, {
  url: '/catalog/:slug',
  type: 'model',
  getSlug: () => 'CatalogPage',
  Component: 'App',
}, {
  url: '/details/:slug',
  type: 'model',
  getSlug: () => 'DetailsPage',
  Component: 'App',
}, {
  url: '*',
  type: 'model',
  getSlug: () => 'CatalogPage',
  Component: 'App',
}];
