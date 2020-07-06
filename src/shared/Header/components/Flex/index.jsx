import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function Flex({ children, className }) {
  return (
    <div className={cx('container', className)}>
      {React.Children.map(children, (child, index) => (
        <div key={+index} className={cx('item')}>{child}</div>
      ))}
    </div>
  );
}

Flex.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
