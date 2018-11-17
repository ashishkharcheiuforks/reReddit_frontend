import {
  SHOW_USER_AUTH_MODAL,
  HIDE_USER_AUTH_MODAL,
  UPDATE_USER_AUTH_MODAL_ERROR,
} from '../actions/actionTypes';

const initialState = {
  showModal: false,
  displayType: null,
  warningMessage: null,
  successMessage: null,
}

const userAuthModal = (state=initialState, action) => {
  switch (action.type) {
    case SHOW_USER_AUTH_MODAL:
      return {
          ...state,
          showModal: true,
          displayType: action.displayType,
          warningMessage: action.warningMessage,
          successMessage: action.successMessage,
      };
    case HIDE_USER_AUTH_MODAL:
      return {
        ...state,
        showModal: false,
        displayType: null,
        warningMessage: null,
        successMessage: null,
      };
    case UPDATE_USER_AUTH_MODAL_ERROR:
      return {
        ...state,
        warningMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default userAuthModal;
