import { composeStoreInitializer } from 'store';
import rootReducer from './reducers';


export const initializeStore = composeStoreInitializer(rootReducer);
