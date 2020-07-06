import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function GalleryThumb({ src, title, onClick, className }) {
  return (
    <div className={cx('thumb', className)} onClick={onClick}>
      <img src={src} alt={title} />
    </div>
  );
}

GalleryThumb.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
