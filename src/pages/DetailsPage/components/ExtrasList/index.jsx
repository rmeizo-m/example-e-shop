import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { getExtrasList } from 'store/DetailsPage/data/selectors';

import pdfIconSrc from './assets/pdf.png';

import styles from './styles.pcss';
const cx = classNames.bind(styles);

const EXTRAS_TYPE_PDF = 'pdf';


function ExtrasList({ list, className }) {
  return (
    <div className={cx('component', className)}>
      {list.map(({ type, name, url }) => (
        <a href={url} className={cx('item')} key={name}>
          {type === EXTRAS_TYPE_PDF && <img src={pdfIconSrc} alt="PDF" className={cx('icon')} />}
          {name} ({type})
        </a>
      ))}
    </div>
  );
}

ExtrasList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
  })),
  className: PropTypes.string,
};


const mapStateToProps = state => ({
  list: getExtrasList(state),
});

export default connect(mapStateToProps)(ExtrasList);
