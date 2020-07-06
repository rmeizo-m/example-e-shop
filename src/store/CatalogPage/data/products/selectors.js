import { getAppData } from '../../../selectors';


export const getCatalogProductsList = state => getAppData(state).products;
