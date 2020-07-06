import { connect } from 'react-redux';

import { getProductArticle } from 'store/DetailsPage/data/selectors';
import { Text } from 'components';


const mapStateToProps = state => ({
  children: `ID: ${getProductArticle(state)}`,
  isLegal: true,
  isSecondary: true,
});

export default connect(mapStateToProps)(Text);
