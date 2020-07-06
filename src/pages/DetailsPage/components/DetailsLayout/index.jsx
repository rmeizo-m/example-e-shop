import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ContentIndent } from 'components';
import Gallery from './components/Gallery';
import UpsaleProducts from './components/UpsaleProducts';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function DetailsLayout({ children, className }) {
  return (
    <ContentIndent className={cx('component', className)} noLeftIndent>
      <div className={cx('sidebar')}>
        <Gallery />
      </div>
      <div className={cx('content')}>
        {children}
      </div>
      <UpsaleProducts />
    </ContentIndent>
  );
}

DetailsLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
