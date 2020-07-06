import { connect } from 'react-redux';

import { getProductTitle } from 'store/DetailsPage/data/selectors';
import { Heading } from 'components';


const mapStateToProps = state => ({
  children: getProductTitle(state),
});

export default connect(mapStateToProps)(Heading);
