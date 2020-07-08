import React from 'react';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';
import ContentIndent from '../ContentIndent';

import styles from './styles.pcss';
const cx = classNames.bind({ ...commonStyles, ...styles });


export default function Footer() {
  return (
    <ContentIndent className={cx('component', 'padv-xs')}>
      &nbsp;
    </ContentIndent>
  );
}
