import React from 'react';
import classNames from 'classnames/bind';

import { HOME_URL } from 'requests/constants';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function Logo() {
  return (
    <a href={HOME_URL} className={cx('component')}>
      GARAGE
    </a>
  );
}
