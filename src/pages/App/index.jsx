import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { initializeStore } from 'store';
import { getPageView } from 'store/common/selectors';
import { PageViews, CATALOG_PAGE, DETAILS_PAGE } from 'store/common/constants';
import { withDataConverter, withHMR, withReduxStore, withAdaptivity } from 'enhancers';
import { breakpoints, setBreakpoint, getBreakpoint } from 'store/common/breakpoint';

import CatalogPage from '../CatalogPage';
import DetailsPage from '../DetailsPage';
import dataConverter from './dataConverter';


function App({ view }) {
  switch (view) {
    case DETAILS_PAGE:
      return <DetailsPage />;
    case CATALOG_PAGE:
    default:
      return <CatalogPage />;
  }
}

App.propTypes = {
  view: PropTypes.oneOf(PageViews),
};

const mapStateToProps = state => ({
  view: getPageView(state),
});

export default compose(
  withHMR(module),
  withDataConverter(dataConverter),
  withReduxStore(initializeStore),
  withAdaptivity({ breakpoints, setBreakpoint, getBreakpoint }),
  connect(mapStateToProps),
)(App);
