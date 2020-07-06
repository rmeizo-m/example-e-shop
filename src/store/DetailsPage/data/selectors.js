import { getAppData } from '../../selectors';

export const getProductTitle = state => getAppData(state).name;
export const getProductArticle = state => getAppData(state).article;
const getProductPriceData = state => getAppData(state).price;
export const getProductPrice = state => getProductPriceData(state).value;
export const getProductSlug = state => getAppData(state).slug;
export const getGalleryImages = state => getAppData(state).productImages;
export const getProductBreadcrumbs = state => getAppData(state).breadcrumbs;


// {
// "data": {
//   "filters": {
//     "size": ["l", "m", "s"],
//     "color": ["black"]
//   },
//   "activeQuickFilters": {
//     "color": "black",
//     "size": "m"
//   },
//   "quickFilters": [
//     {
//       "slug": "size",
//       "name": "Размер",
//       "values": [
//         {
//           "slug": "xsmall",
//           "value": "xs",
//           "notAvailable": true
//         }, {
//           "slug": "small",
//           "value": "s"
//         }, {
//           "slug": "medium",
//           "value": "m"
//         }, {
//           "slug": "large",
//           "value": "l"
//         }
//       ]
//     }, {
//       "slug": "color",
//       "name": "Цвет",
//       "values": [
//         {
//           "slug": "black",
//           "value": "#000"
//         }, {
//           "slug": "yellow",
//           "value": "#00aaaa"
//         }, {
//           "slug": "white",
//           "value": "#fff"
//         }
//       ]
//     }
//   ],
//   "characteristics": [
//     {
//       "label": "Цвет",
//       "value": "Серый"
//     }, {
//       "label": "Материал",
//       "value": "Хлопок"
//     }, {
//       "label": "Рост модели",
//       "value": "188 см"
//     }, {
//       "label": "Размер на модели",
//       "value": "M"
//     }
//   ],
//   "extras": [
//     {
//       "type": "pdf",
//       "name": "Руководство по стирке и уходу (pdf)",
//       "url": "/static/wash-recomendations"
//     }
//   ]
// },
// }

