import {
  OPEN_SHARE_DRAWER,
  CLOSE_SHARE_DRAWER,
} from './shareTypes';

export function openShareDrawer() {
  return {
    type: OPEN_SHARE_DRAWER,
  };
}

export function closeShareDrawer() {
  return {
    type: CLOSE_SHARE_DRAWER,
  };
}
