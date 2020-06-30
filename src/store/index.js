import deepmerge from 'deepmerge';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

let globalStore = null;


/**
 * Project wide typical redux store
 * has three arguments, neither of which are required
 */
export function configureStore(rootReducer, extraMiddleware) {
  const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  globalStore = createStore(
    enableStorePopulation(rootReducer),
    composeEnhancers(applyMiddleware(thunk, ...(extraMiddleware || []))),
  );
  return globalStore;
}


const POPULATE_STORE = 'Store::Populate';

/**
 * enhance `rootReducer` for population: rewriting entire store with new incoming data
 */
export const enableStorePopulation = rootReducer =>
  (state, action) => {
    const { type, payload } = action;
    if (type === POPULATE_STORE) {
      /** first fill initialState */
      const initialState = rootReducer(undefined, {});

      /** then merge incoming data on top */
      state = deepmerge(initialState, payload, { arrayMerge: (_, incoming) => incoming });
    }
    return rootReducer(state, action);
  };


export const populateStore = payload => ({
  type: POPULATE_STORE,
  payload,
});


export function getStore() {
  if (globalStore === null) throw new Error('Attempting to retrieve store before initialization');
  return globalStore;
}


/**
 * The whole idea is that there should only be one store created.
 * We may replace rootReducer and that is about it
 */
export function composeStoreInitializer(rootReducer) {
  return function initializeStore() {
    try {
      const store = getStore();
      store.replaceReducer(enableStorePopulation(rootReducer));
      return store;
    } catch (err) {
      return configureStore(rootReducer, []);
    }
  };
}
