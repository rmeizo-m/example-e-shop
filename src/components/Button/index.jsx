import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import cartIconUrl from './assets/buttonCart.png';
import favIconUrl from './assets/buttonFav.png';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


const BUTTON_TYPE_CART = 'cart';
const BUTTON_TYPE_FAV = 'fav';
const ButtonTypes = {
  BUTTON_TYPE_CART,
  BUTTON_TYPE_FAV,
};

const getIconUrlByType = (type) => {
  switch (type) {
    case BUTTON_TYPE_CART:
      return cartIconUrl;
    case BUTTON_TYPE_FAV:
      return favIconUrl;
    default:
      return null;
  }
};

export default function Button({ children, href, onClick, type, isLight, className }) {
  const TagName = href ? 'a' : 'button';
  const iconUrl = getIconUrlByType(type);
  return (
    <TagName href={href} onClick={onClick} className={cx('component', { light: isLight }, className)}>
      {iconUrl && <img src={iconUrl} alt="" className={cx('icon')} />}
      {children}
    </TagName>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  type: PropTypes.oneOf(Object.values(ButtonTypes)),
  isLight: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.propConstants = {
  type: ButtonTypes,
};
