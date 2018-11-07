import {
  SHOW_USER_AUTH_MODAL,
  HIDE_USER_AUTH_MODAL,
} from '../actions/actionTypes';

const initialState = {
  showModal: false,
  displayType: null,
  error: null,
}

const userAuthModal = (state=initialState, action) => {
  switch (action.type) {
    case SHOW_USER_AUTH_MODAL:
      return {
          ...state,
          showModal: true,
          displayType: action.displayType,
          error: null,
      };
    case HIDE_USER_AUTH_MODAL:
      return {
        ...state,
        showModal: false,
        displayType: null,
        error: null,
      };
    default:
      return state;
  };
};

export default userAuthModal;