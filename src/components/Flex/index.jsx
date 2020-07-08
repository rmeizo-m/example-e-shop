import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function Flex({ children, isInline, align, isDoubleSpacing, className }) {
  return (
    <div className={cx('container', { inline: isInline, doubleSpacing: isDoubleSpacing }, `${align}Align`, className)}>
      {React.Children.map(children, (child, index) => (
        <div key={+index} className={cx('item')}>{child}</div>
      ))}
    </div>
  );
}

Flex.propTypes = {
  children: PropTypes.node,
  isInline: PropTypes.bool,
  isDoubleSpacing: PropTypes.bool,
  align: PropTypes.oneOf(['top', 'bottom']),
  className: PropTypes.string,
};
