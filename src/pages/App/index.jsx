import React from 'react';
import { compose } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { initializeStore } from 'store';
import { breakpoints, setBreakpoint, getBreakpoint } from 'store/common/breakpoint';
import { withDataConverter, withHMR, withReduxStore, withAdaptivity, withReactRouter } from 'enhancers';
import { CATALOG_URL, DETAILS_URL } from 'requests/constants';

import CatalogPage from '../CatalogPage';
import DetailsPage from '../DetailsPage';
import dataConverter from './dataConverter';


const Page404 = () => (
  <h1>404 Not Found</h1>
);

const Page401 = () => (
  <h1>401 Unauthorized</h1>
);

const AuthorizedRouteLayout = ({ renderUnauthorized = Page401, isAuthorized, ...props }) => {
  if (!isAuthorized) return renderUnauthorized();
  return (
    <Route {...props} />
  );
};


const mapStateToProps = () => ({
  isAuthorized: true,
});

const AuthorizedRoute = connect(mapStateToProps)(AuthorizedRouteLayout);

function App() {
  return (
    <Switch>
      <Route path={DETAILS_URL} component={DetailsPage} />
      <Route path={CATALOG_URL} component={CatalogPage} />
      <AuthorizedRoute path="/lk/test" renderUnauthorized={() => 'Please login'}>
        Welcome, Ivan
      </AuthorizedRoute>
      <Route component={Page404} />
    </Switch>
  );
}

App.propTypes = {
};

export default compose(
  withHMR(module),
  withDataConverter(dataConverter),
  withReduxStore(initializeStore),
  withReactRouter(),
  withAdaptivity({ breakpoints, setBreakpoint, getBreakpoint }),
)(App);
