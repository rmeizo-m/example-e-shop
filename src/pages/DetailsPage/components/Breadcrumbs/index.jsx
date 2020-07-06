import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { getProductBreadcrumbs } from 'store/DetailsPage/data/selectors';
import { Text } from 'components';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


function Breadcrumbs({ list, className }) {
  return (
    <div className={cx('component', className)}>
      {list.map(({ title, url }) => (
        <Text isSecondary isInline className={cx('crumb')} key={title}>
          <a href={url}>
            {title}
          </a>
        </Text>
      ))}
    </div>
  );
}

Breadcrumbs.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })),
  className: PropTypes.string,
};


const mapStateToProps = state => ({
  list: getProductBreadcrumbs(state),
});

export default connect(mapStateToProps)(Breadcrumbs);
