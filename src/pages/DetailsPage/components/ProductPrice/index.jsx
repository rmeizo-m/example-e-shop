import { connect } from 'react-redux';

import { getProductPrice } from 'store/DetailsPage/data/selectors';
import { Price } from 'components';


const mapStateToProps = state => ({
  value: getProductPrice(state),
  isLarge: true,
});

export default connect(mapStateToProps)(Price);
