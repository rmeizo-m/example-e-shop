import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCatalogFiltersList } from 'store/CatalogPage/data/filters/selectors';
import FilterLink from './components/FilterLink';


function CatalogFilters({ list, className }) {
  return (
    <div className={className}>
      {list.map(({ name, slug, isActive }) => (
        <FilterLink
          key={slug}
          {...{ slug, isActive }}
        >
          {name}
        </FilterLink>
      ))}
    </div>
  );
}

CatalogFilters.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    isActive: PropTypes.bool,
  })),
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  list: getCatalogFiltersList(state),
});

export default connect(mapStateToProps)(CatalogFilters);
