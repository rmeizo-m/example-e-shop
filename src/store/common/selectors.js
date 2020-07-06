import { getAppCommons } from '../selectors';


export const getPageView = state => getAppCommons(state).view;
export const getNavData = state => getAppCommons(state).navigation;
export const getSectionNav = state => getNavData(state).sections;
export const getCoreNav = state => getNavData(state).core;
