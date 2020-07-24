import React from 'react';
import { HashRouter } from 'react-router-dom';


/**
 * HOC for connecting CatalogPage redux store
 * WrappedComponent is not supposed to remount and will erase shop data on each new mount
 * */
export default function withReactRouter() {
  const Router = HashRouter; // typeof window === 'undefined' ? StaticRouter : BrowserRouter;

  return WrappedComponent =>
    (props) => (
      <Router>
        <WrappedComponent {...props} />
      </Router>
    );
}
