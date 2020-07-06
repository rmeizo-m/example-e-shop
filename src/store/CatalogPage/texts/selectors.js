import { getAppTexts } from '../../selectors';


const getCatalogTexts = state => getAppTexts(state).catalog;

