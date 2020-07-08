import { addToCartRequest, addToFavRequest } from 'requests/api';


export const addProductToCart = (productId) => () => addToCartRequest(productId);
export const addProductToFav = (productId) => () => addToFavRequest(productId);
