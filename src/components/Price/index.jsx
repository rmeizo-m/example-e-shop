import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { formatPrice } from 'utils/formatting';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function ProductPrice({ value, isLarge, className }) {
  return (
    <div className={cx('component', { large: isLarge }, className)}>
      {formatPrice(value)} ₽
    </div>
  );
}

ProductPrice.propTypes = {
  value: PropTypes.number,
  isLarge: PropTypes.bool,
  className: PropTypes.string,
};
