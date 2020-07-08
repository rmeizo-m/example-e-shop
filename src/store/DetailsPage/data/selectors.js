import { getAppData } from '../../selectors';

export const getProductTitle = state => getAppData(state).name;
export const getProductArticle = state => getAppData(state).article;
const getProductPriceData = state => getAppData(state).price;
export const getProductPrice = state => getProductPriceData(state).value;
export const getProductSlug = state => getAppData(state).slug;
export const getGalleryImages = state => getAppData(state).productImages;
export const getProductBreadcrumbs = state => getAppData(state).breadcrumbs;
export const getCharacteristicsList = state => getAppData(state).characteristics;
export const getExtrasList = state => getAppData(state).extras;

