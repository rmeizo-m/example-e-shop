import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function Heading({ children, size, className }) {
  const Tag = `h${size}`;

  return (
    <Tag className={cx('component', `h${size}`, className)}>
      {children}
    </Tag>
  );
}

Heading.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  className: PropTypes.string,
};

Heading.defaultProps = {
  size: 3,
};
