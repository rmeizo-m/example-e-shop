import { connect } from 'react-redux';

import { addDetailsProductToCart } from 'store/DetailsPage/actions';
import { getActionButtonLabel } from 'store/DetailsPage/texts/selectors';
import { Button } from 'components';


const mapStateToProps = state => ({
  children: getActionButtonLabel(state),
  type: Button.propConstants.type.BUTTON_TYPE_CART,
});

const mapDispatchToProps = ({
  onClick: addDetailsProductToCart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
