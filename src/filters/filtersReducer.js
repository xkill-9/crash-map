import {
  CLOSE_FILTERS_DRAWER,
  OPEN_FILTERS_DRAWER,
} from './filterActionTypes';

export default function filtersReducer(state = {}, action) {
  switch (action.type) {
    case OPEN_FILTERS_DRAWER:
      return { ...state, drawerOpen: true };
    case CLOSE_FILTERS_DRAWER:
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
}
