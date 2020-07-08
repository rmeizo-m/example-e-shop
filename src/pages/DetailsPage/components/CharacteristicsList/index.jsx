import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { getCharacteristicsList } from 'store/DetailsPage/data/selectors';

import styles from './styles.pcss';
const cx = classNames.bind(styles);


function CharacteristicsList({ list, className }) {
  return (
    <div className={cx('component', className)}>
      {list.map(({ label, value }) => (
        <div className={cx('item')} key={label}>
          {label}: {value}
        </div>
      ))}
    </div>
  );
}

CharacteristicsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  className: PropTypes.string,
};


const mapStateToProps = state => ({
  list: getCharacteristicsList(state),
});

export default connect(mapStateToProps)(CharacteristicsList);
