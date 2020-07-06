import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function ProductImage({ src, href, title, className }) {
  return (
    <a href={href} title={title} className={cx('component', className)}>
      <img src={src} alt={title} />
    </a>
  );
}

ProductImage.propTypes = {
  src: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};
