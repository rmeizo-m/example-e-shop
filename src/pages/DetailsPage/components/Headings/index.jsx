import { connect } from 'react-redux';

import { getProductTitle } from 'store/DetailsPage/data/selectors';
import { getCharacteristicsTitle, getExtraTitle } from 'store/DetailsPage/texts/selectors';
import { Heading } from 'components';


export const ProductHeading = connect(state => ({
  children: getProductTitle(state),
  size: 2,
}))(Heading);

export const CharacteristicsHeading = connect(state => ({
  children: getCharacteristicsTitle(state),
}))(Heading);

export const ExtraHeading = connect(state => ({
  children: getExtraTitle(state),
}))(Heading);
