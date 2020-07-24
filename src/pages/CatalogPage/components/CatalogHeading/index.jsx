import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCatalogHeading } from 'store/CatalogPage/data/selectors';
import { Heading } from 'components';


function CatalogHeading({ children, className }) {
  return (
    <Heading className={className}>
      {children}
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
