import { createSelector } from 'reselect';
import { getAppData } from '../../../selectors';


const getCatalogFiltersData = state => getAppData(state).filters;
const getCatalogFiltersListRaw = state => getCatalogFiltersData(state).list;
const getCatalogFiltersActiveSlug = state => getCatalogFiltersData(state).activeSlug;

export const getCatalogFiltersList = createSelector(
  getCatalogFiltersListRaw,
  getCatalogFiltersActiveSlug,
  (list, activeSlug) => list.map((item) => ({
    ...item,
    isActive: item.slug === activeSlug,
  })),
);

export const getActiveCategoryTitle = createSelector(
  getCatalogFiltersList,
  (list) => {
    const activeCategory = list.find(item => item.isActive);
    if (!activeCategory) return undefined;
    return activeCategory.name;
  },
);


export const getCatalogQuickFilters = state => getAppData(state).quickFilters;
