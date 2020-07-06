import { connect } from 'react-redux';

import { getCoreNav, getSectionNav } from 'store/common/selectors';
import NavListRenderer from './NavListRenderer';


export const SectionNavList = connect(state => ({
  list: getSectionNav(state),
}))(NavListRenderer);

export const CoreNavList = connect(state => ({
  list: getCoreNav(state),
}))(NavListRenderer);
