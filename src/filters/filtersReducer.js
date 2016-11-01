import {
  CLOSE_FILTERS_DRAWER,
  OPEN_FILTERS_DRAWER,
  FETCH_FILTERS,
  SELECT_FILTER,
  REMOVE_FILTER,
} from './filterActionTypes';
import omit from 'lodash/omit';

const initialState = {
  drawerOpen: false,
  all: [],
  selected: {},
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_FILTERS_DRAWER:
      return { ...state, drawerOpen: true };
    case CLOSE_FILTERS_DRAWER:
      return { ...state, drawerOpen: false };
    case FETCH_FILTERS:
      return { ...state, all: action.payload };
    case SELECT_FILTER:
      return {
        ...state,
        selected: { ...state.selected, [action.payload.id]: action.payload.value },
      };
    case REMOVE_FILTER:
      return {
        ...state,
        selected: omit(state.selected, action.payload),
      };
    default:
      return state;
  }
}
