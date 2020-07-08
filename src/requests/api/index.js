import { axiosBaseRequest } from '../helpers';
import { ADD_TO_CART_URL, ADD_TO_FAV_URL } from './constants';


export const addToCartRequest = (productId) => axiosBaseRequest({
  method: 'POST',
  url: ADD_TO_CART_URL,
  data: { productId },
});


export const addToFavRequest = (productId) => axiosBaseRequest({
  method: 'POST',
  url: ADD_TO_FAV_URL,
  data: { productId },
});
