import { combineReducers } from 'redux';
import breakpointReducer from './common/breakpoint/reducers';

export default combineReducers({
  data: (state = {}) => state,
  common: (state = {}, action) => ({
    ...state,
    breakpoint: breakpointReducer(state.breakpoint, action),
  }),
  texts: (state = {}) => state,
});
