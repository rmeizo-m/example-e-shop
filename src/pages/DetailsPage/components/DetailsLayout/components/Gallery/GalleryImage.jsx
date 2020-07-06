import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function GalleryImage({ src, title, className }) {
  return (
    <img src={src} alt={title} className={cx('mainImage', className)} />
  );
}

GalleryImage.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};
