import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Link, Route } from 'react-router-dom';
import { NavTypes } from 'store/common/nav/constants';
import NavIcon from './NavIcon';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function NavItem({ children, type, href, className }) {
  return (
    <Route path={href}>
      {({ match }) => (
        <Link to={href} className={cx('component', { active: !!match, hasIcon: !!type }, className)}>
          {type && <NavIcon type={type} className={cx('icon')} />}
          {children}
        </Link>
      )}
    </Route>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  type: PropTypes.oneOf(NavTypes),
  className: PropTypes.string,
};
