import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function Text({ children, isLegal, isItalic, isSecondary, isLarge, isInline, className }) {
  const Tag = isInline ? 'span' : 'div';
  return (
    <Tag
      className={cx('component', className, {
        legal: isLegal, secondary: isSecondary, large: isLarge, italic: isItalic,
      })}
      {...(typeof children !== 'string' ? { children } : {
        dangerouslySetInnerHTML: { __html: children },
      })}
    />
  );
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  isLegal: PropTypes.bool,
  isItalic: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isLarge: PropTypes.bool,
  isInline: PropTypes.bool,
  className: PropTypes.string,
};
