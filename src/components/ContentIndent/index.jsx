import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


export default function ContentIndent({ children, noLeftIndent = false, className, ...otherAttributes }) {
  return (
    <div className={cx('component', { noLeftIndent }, className)} {...otherAttributes}>
      {children}
    </div>
  );
}

ContentIndent.propTypes = {
  children: PropTypes.node,
  noLeftIndent: PropTypes.bool,
  className: PropTypes.string,
};
