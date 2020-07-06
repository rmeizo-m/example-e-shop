import React from 'react';
import PropTypes from 'prop-types';
import { NavTypes } from 'store/common/nav/constants';

import { NavIcons } from './assets';


export default function NavItem({ type, className }) {
  const iconSrc = NavIcons[type] || null;
  return iconSrc && (
    <img src={iconSrc} className={className} alt="" />
  );
}

NavItem.propTypes = {
  type: PropTypes.oneOf(NavTypes),
  className: PropTypes.string,
};
