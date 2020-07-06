import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function CatalogQuickFilters({ children, className }) {
  return (
    <div className={cx('component', className)}>
      QuickFilters{children}
    </div>
  );
}

CatalogQuickFilters.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
