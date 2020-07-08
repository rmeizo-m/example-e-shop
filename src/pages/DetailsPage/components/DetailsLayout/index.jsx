import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';
import { isScreenBelow800 } from 'store/common/breakpoint/selectors';
import { ContentIndent } from 'shared';
import Gallery from './components/Gallery';
import UpsaleProducts from './components/UpsaleProducts';
import Breadcrumbs from '../Breadcrumbs';

import styles from './styles.pcss';

const cx = classNames.bind({ ...commonStyles, ...styles });


function DetailsLayout({ children, isVertical, className }) {
  return (
    <div className={cx('component', { vertical: isVertical }, className)}>
      <ContentIndent className={cx('layout')} noLeftIndent={!isVertical}>
        <div className={cx('sidebar')}>
          {isVertical && <Breadcrumbs className={cx('marb-s')} />}
          <Gallery className={cx('marb-m')} />
        </div>
        <div className={cx('content')}>
          {!isVertical && <Breadcrumbs className={cx('marb-s')} />}
          {children}
        </div>
      </ContentIndent>
      <ContentIndent>
        <UpsaleProducts className={cx('mart-l')} />
      </ContentIndent>
    </div>
  );
}

DetailsLayout.propTypes = {
  children: PropTypes.node,
  isVertical: PropTypes.bool,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  isVertical: isScreenBelow800(state),
});

export default connect(mapStateToProps)(DetailsLayout);
