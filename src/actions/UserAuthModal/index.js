import {
  SHOW_USER_AUTH_MODAL,
  HIDE_USER_AUTH_MODAL,
  UPDATE_USER_AUTH_MODAL_ERROR,
} from '../actionTypes';

export const showUserAuthModal = (
  displayType,
  successMessage = null,
  errorMessage = null
  ) => (
  {
    type: SHOW_USER_AUTH_MODAL,
    displayType,
    successMessage,
    errorMessage,
  }
);

export const hideUserAuthModal = () => (
  {
    type: HIDE_USER_AUTH_MODAL,
  }
);

export const updateErrorMessage = (errorMessage) => (
  {
    type: UPDATE_USER_AUTH_MODAL_ERROR,
    errorMessage,
  }
)
