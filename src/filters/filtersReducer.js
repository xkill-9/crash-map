import {
  CLOSE_FILTERS_DRAWER,
  OPEN_FILTERS_DRAWER,
  FETCH_FILTERS,
  SELECT_FILTER,
  REMOVE_FILTER,
  TOGGLE_FILTER_GROUP,
  SHOW_ACTIVE_FILTERS,
  HIDE_ACTIVE_FILTERS,
  TOGGLE_ACTIVE_FILTERS,
} from './filterActionTypes';
import omit from 'lodash/omit';

const initialState = {
  drawerOpen: false,
  showActiveFilters: false,
  all: [],
  selected: {},
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ACTIVE_FILTERS:
      return { ...state, showActiveFilters: action.payload };
    case SHOW_ACTIVE_FILTERS:
      return { ...state, showActiveFilters: true };
    case HIDE_ACTIVE_FILTERS:
      return { ...state, showActiveFilters: false };
    case OPEN_FILTERS_DRAWER:
      return { ...state, drawerOpen: true };
    case CLOSE_FILTERS_DRAWER:
      return { ...state, drawerOpen: false };
    case FETCH_FILTERS:
      return { ...state, all: action.payload };
    case SELECT_FILTER:
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.payload.id]: action.payload.value,
        },
      };
    case TOGGLE_FILTER_GROUP:
      return {
        ...state,
        all: state.all.map((filter) => {
          if (filter.id === action.payload.id) {
            return { ...filter, isOpened: action.payload.isOpened };
          }
          return { ...filter, isOpened: false };
        }),
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
