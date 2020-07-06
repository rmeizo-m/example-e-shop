import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function CatalogViewType({ className }) {
  return (
    <a className={cx('component', className)}>
      Показать на модели
    </a>
  );
}

CatalogViewType.propTypes = {
  className: PropTypes.string,
};
