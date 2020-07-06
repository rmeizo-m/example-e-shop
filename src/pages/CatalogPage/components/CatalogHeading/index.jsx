import { connect } from 'react-redux';

import { getCatalogHeading } from 'store/CatalogPage/data/selectors';
import { Heading } from 'components/index';


const mapStateToProps = state => ({
  children: getCatalogHeading(state),
});

export default connect(mapStateToProps)(Heading);
