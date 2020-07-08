const uniqueAppend = (list, addItem) => [...new Set([...list, addItem])].filter(item => !!item);

module.exports = [{
  url: '/api/addToCart',
  method: 'POST',
  handler: (req, res) => {
    const { productId } = req.body;
    const cart = (req.cookies.cart || '').split(',');
    res.cookie('cart', uniqueAppend(cart, productId).join(','))
      .send();
  },
}, {
  url: '/api/addToFav',
  method: 'POST',
  handler: (req, res) => {
    const { productId } = req.body;
    const fav = (req.cookies.fav || '').split(',');
    res.cookie('fav', uniqueAppend(fav, productId).join(','))
      .send();
  },
}];
