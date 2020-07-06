import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';
import { getUpsaleProductsHeading } from 'store/DetailsPage/texts/selectors';
import { Heading } from 'components';

const cx = classNames.bind(commonStyles);


function UpsaleProducts({ heading, children, className }) {
  return (
    <div className={cx('component', className)}>
      <Heading className={cx('marb-m')}>{heading}</Heading>
      {children}
    </div>
  );
}

UpsaleProducts.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};


const mapStateToProps = state => ({
  heading: getUpsaleProductsHeading(state),
});

export default connect(mapStateToProps)(UpsaleProducts);
