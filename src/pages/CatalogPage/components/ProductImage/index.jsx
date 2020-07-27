import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function ProductImage({ src, href, title, className }) {
  return (
    <Link to={href} title={title} className={cx('component', className)}>
      <img src={src} alt={title} />
    </Link>
  );
}

ProductImage.propTypes = {
  src: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};
