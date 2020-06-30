import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function Header() {
  return (
    <div className={cx('header')}>
      Garage
    </div>
  );
}
