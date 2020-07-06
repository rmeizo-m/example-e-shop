
import { getAppTexts } from '../../selectors';


const getDetailsTexts = state => getAppTexts(state).details;


export const getUpsaleProductsHeading = state => getDetailsTexts(state).details;
