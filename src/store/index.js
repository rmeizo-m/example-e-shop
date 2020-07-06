import { composeStoreInitializer } from './core';
import rootReducer from './reducers';


export const initializeStore = composeStoreInitializer(rootReducer);
