import { getAppData } from '../../selectors';

export const getCatalogHeading = state => getAppData(state).heading;
