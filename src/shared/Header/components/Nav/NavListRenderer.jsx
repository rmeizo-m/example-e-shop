import React from 'react';
import PropTypes from 'prop-types';
import NavList from './NavList';


export default function NavListRenderer({ children, list, ...navListProps }) {
  return (
    <NavList {...navListProps}>
      {list.map((navItem) => children(navItem))}
    </NavList>
  );
}

NavListRenderer.propTypes = {
  list: PropTypes.array,
  children: PropTypes.func,
  className: PropTypes.string,
};
