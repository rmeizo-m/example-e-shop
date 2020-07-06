import { getAppTexts } from '../../selectors';


const getCommonTexts = state => getAppTexts(state).common;

export const getHeaderNavTexts = state => getCommonTexts(state).nav;
