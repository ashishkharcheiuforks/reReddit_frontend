import {
  SHOW_USER_AUTH_MODAL,
  HIDE_USER_AUTH_MODAL,
} from '../actionTypes';

export const showUserAuthModal = (displayType) => (
  {
    type: SHOW_USER_AUTH_MODAL,
    displayType,
  }
);

export const hideUserAuthModal = () => (
  {
    type: HIDE_USER_AUTH_MODAL,
  }
);