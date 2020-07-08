import { connect } from 'react-redux';

import { addDetailsProductToFav } from 'store/DetailsPage/actions';
import { getFavButtonLabel } from 'store/DetailsPage/texts/selectors';
import { Button } from 'components';


const mapStateToProps = state => ({
  isLight: true,
  children: getFavButtonLabel(state),
  type: Button.propConstants.type.BUTTON_TYPE_FAV,
});

const mapDispatchToProps = ({
  onClick: addDetailsProductToFav,
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
