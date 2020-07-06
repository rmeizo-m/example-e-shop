import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function FilterLink({ href, onClick, isActive, children, className }) {
  return (
    <div className={cx('component', { active: isActive }, className)}>
      <a href={href} onClick={onClick} className={cx('link')}>
        {children}
      </a>
    </div>
  );
}

FilterLink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};
