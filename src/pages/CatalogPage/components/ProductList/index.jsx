import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { getCatalogProductsList } from 'store/CatalogPage/data/products/selectors';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


function ProductList({ list, children, className }) {
  return (
    <div className={cx('component', className)}>
      {list.map((item) => (
        <div className={cx('item')} key={item.name}>
          {children(item)}
        </div>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.shape({
      value: PropTypes.number,
    }),
    filters: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  })),
  children: PropTypes.func,
  className: PropTypes.string,
};


const mapStateToProps = state => ({
  list: getCatalogProductsList(state),
});

export default connect(mapStateToProps)(ProductList);
