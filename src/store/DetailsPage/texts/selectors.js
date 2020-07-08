
import { getAppTexts } from '../../selectors';


const getDetailsTexts = state => getAppTexts(state).details;

export const getUpsaleProductsHeading = state => getDetailsTexts(state).upsaleProductsHeading;
export const getCharacteristicsTitle = state => getDetailsTexts(state).characteristicsTitle;
export const getExtraTitle = state => getDetailsTexts(state).extraTitle;
export const getActionButtonLabel = state => getDetailsTexts(state).actionButtonLabel;
export const getFavButtonLabel = state => getDetailsTexts(state).favButtonLabel;
