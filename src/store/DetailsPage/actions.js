import { addProductToCart, addProductToFav } from '../actions';
import { getProductArticle } from './data/selectors';


export const addDetailsProductToCart = () =>
  (dispatch, getState) => {
    const state = getState();
    const productId = getProductArticle(state);
    dispatch(addProductToCart(productId));
  };

export const addDetailsProductToFav = () =>
  (dispatch, getState) => {
    const state = getState();
    const productId = getProductArticle(state);
    dispatch(addProductToFav(productId));
  };
