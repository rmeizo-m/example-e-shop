import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ContentIndent } from 'shared';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function CatalogLayout({ children, sidebar, className }) {
  return (
    <ContentIndent className={cx('component', className)}>
      <div className={cx('sidebar')}>
        {sidebar}
      </div>
      <div className={cx('content')}>
        {children}
      </div>
    </ContentIndent>
  );
}

CatalogLayout.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.node,
  className: PropTypes.string,
};
