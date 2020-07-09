import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { isScreenBelow800 } from 'store/common/breakpoint/selectors';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


function ContentIndent({ children, noLeftIndent = false, isMobile, className, ...otherAttributes }) {
  return (
    <div className={cx('component', { noLeftIndent, smallIndent: isMobile }, className)} {...otherAttributes}>
      {children}
    </div>
  );
}

ContentIndent.propTypes = {
  children: PropTypes.node,
  noLeftIndent: PropTypes.bool,
  isMobile: PropTypes.bool,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  isMobile: isScreenBelow800(state),
});

export default connect(mapStateToProps, {})(ContentIndent);
