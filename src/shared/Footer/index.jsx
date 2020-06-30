import React from 'react';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';
import { Wrapper } from 'components';

import styles from './styles.pcss';
const cx = classNames.bind({ ...commonStyles, ...styles });


export default function Footer() {
  const WrapperContent = React.useCallback(({ children, className }) => (
    <div className={cx('component', 'padv-xs', className)}>
      {children}
    </div>
  ));

  return (
    <Wrapper className={cx('container')} Content={WrapperContent}>
      &nbsp;
    </Wrapper>
  );
}
