import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { NavTypes } from 'store/common/nav/constants';
import NavIcon from './NavIcon';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function NavItem({ children, type, href, className }) {
  return (
    <a href={href} className={cx('component', { hasIcon: !!type }, className)}>
      {type && <NavIcon type={type} className={cx('icon')} />}
      {children}
    </a>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  type: PropTypes.oneOf(NavTypes),
  className: PropTypes.string,
};
