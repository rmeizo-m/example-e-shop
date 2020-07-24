import React from 'react';
import { Provider } from 'react-redux';
import { populateStore } from 'store/core';
import { useWillMount } from 'hooks';


/**
 * HOC for connecting CatalogPage redux store
 * WrappedComponent is not supposed to remount and will erase shop data on each new mount
 * */
export default function withReduxStore(initializeStore) {
  return WrappedComponent => (
    (props) => {
      const store = initializeStore();

      /**
       * Its important to populate store before render
       */
      useWillMount(() => {
        store.dispatch(populateStore(props));
      });

      return (
        <Provider store={store}>
          <WrappedComponent />
        </Provider>
      );
    }
  );
}
