import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';


import commonStyles from 'styles/common.pcss';
import { getGalleryImages } from 'store/DetailsPage/data/selectors';
import GalleryImage from './GalleryImage';
import GalleryThumb from './GalleryThumb';

import styles from './styles.pcss';
const cx = classNames.bind({ ...commonStyles, ...styles });


function Gallery({ imageUrls, className }) {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  return (
    <div className={cx('component', className)}>
      <GalleryImage src={imageUrls[activeImageIndex]} />
      <div className={cx('thumbs', 'mart-xxs')}>
        {imageUrls.map((thumbImageUrl, index) => (
          <GalleryThumb
            src={thumbImageUrl}
            onClick={() => setActiveImageIndex(index)}
            key={+index}
          />
        ))}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};


const mapStateToProps = state => ({
  imageUrls: getGalleryImages(state),
});

export default connect(mapStateToProps)(Gallery);
