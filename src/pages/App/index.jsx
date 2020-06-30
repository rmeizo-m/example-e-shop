import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { initializeStore } from 'store/App';
import { getPageView } from 'store/common/selectors';
import { PageViews, HOME_PAGE } from 'store/common/constants';
import { withDataConverter, withHMR, withReduxStore } from 'enhancers';

import HomePage from '../HomePage';
import dataConverter from './dataConverter';


function App({ view }) {
  switch (view) {
    case HOME_PAGE:
    default:
      return <HomePage />;
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
  connect(mapStateToProps),
)(App);
