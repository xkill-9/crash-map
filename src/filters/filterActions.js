import {
  CLOSE_FILTERS_DRAWER,
  OPEN_FILTERS_DRAWER,
} from './filterActionTypes';

export function openFiltersDrawer() {
  return {
    type: OPEN_FILTERS_DRAWER,
  };
}

export function closeFiltersDrawer() {
  return {
    type: CLOSE_FILTERS_DRAWER,
  };
}
