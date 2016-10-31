import {
  OPEN_SHARE_DRAWER,
  CLOSE_SHARE_DRAWER,
} from './shareTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case OPEN_SHARE_DRAWER:
      return { ...state, drawerOpen: true };
    case CLOSE_SHARE_DRAWER:
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
}
