import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { getCatalogHeading } from 'store/CatalogPage/data/selectors';
import { Heading } from 'components';


function CatalogHeading({ children, className }) {
  return (
    <Heading className={className}>
      <Route path="/catalog/men">{children}</Route>
      <Route path="/catalog/women">Женская одежда</Route>
      <Route path="/catalog/outlet">Одежда со скидкой</Route>
    </Heading>
  );
}

CatalogHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  children: getCatalogHeading(state),
});

export default connect(mapStateToProps)(CatalogHeading);
