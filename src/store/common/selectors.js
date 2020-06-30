import { getAppCommons } from '../selectors';


export const getPageView = state => getAppCommons(state).view;
