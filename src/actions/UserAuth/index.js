import apiRequestErrorHandler from "../../utilities/apiErrorHandler";
import {
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
  USER_AUTH_LOGIN_FAILURE,
  USER_AUTH_REGISTER_REQUEST,
  USER_AUTH_REGISTER_SUCCESS,
  USER_AUTH_REGISTER_FAILURE,
  USER_AUTH_UPDATE_REQUEST,
  USER_AUTH_UPDATE_SUCCESS,
  USER_AUTH_UPDATE_FAILURE,
  USER_AUTH_LOGOUT_REQUEST,
  USER_AUTH_LOGOUT_SUCCESS,
  USER_AUTH_LOGOUT_FAILURE,
  API_USER_AUTH_UPDATE,
  API_USER_AUTH_LOGOUT,
  API_USER_AUTH_LOGIN,
  API_USER_AUTH_REGISTER
} from "../actionTypes";

import {
  userLoginApi,
  userLogoutApi,
  userRegisterApi,
  userUpdateApi
} from "../../api/UserAuth";
import {
  showUserAuthModal,
  hideUserAuthModal,
  updateErrorMessage
} from "../UserAuthModal";
import { getAuthUserToken } from "../../reducers/userAuth";

export const makeUserLoginRequest = (username, password) => ({
  type: API_USER_AUTH_LOGIN,
  types: {
    request: USER_AUTH_LOGIN_REQUEST,
    success: onUserAuthSuccess(USER_AUTH_LOGIN_SUCCESS),
    failure: onUserAuthFailure(USER_AUTH_LOGIN_FAILURE)
  },
  callAPI: () => userLoginApi({ username, password })
});

export const makeUserRegisterRequest = (username, password, email) => ({
  type: API_USER_AUTH_REGISTER,
  types: {
    request: USER_AUTH_REGISTER_REQUEST,
    success: onUserAuthRegisterSuccess,
    failure: onUserAuthFailure(USER_AUTH_REGISTER_FAILURE)
  },
  callAPI: () =>
    userRegisterApi({
      username,
      password,
      email
    })
});

const onUserAuthRegisterSuccess = (data, getState, dispatch) => {
  dispatch({
    type: USER_AUTH_REGISTER_SUCCESS,
    data
  });
  const message = "User profile created! Please log in.";
  dispatch(showUserAuthModal("login", message));
};

const registerSuccessLoginModal = () => {
  // When successfully registered launch the login modal with
  // success message
  const successMessage = "User profile created! Please log in.";
  return showUserAuthModal("login", successMessage);
};

// Upon change to user backend we might need to reload the user data
export const makeUserUpdateRequest = (username, updateData) => (
  dispatch,
  getState
) => {
  dispatch({
    type: API_USER_AUTH_UPDATE,
    types: {
      request: USER_AUTH_UPDATE_REQUEST,
      success: onUserAuthSuccess(USER_AUTH_UPDATE_SUCCESS),
      failure: onUserAuthFailure(USER_AUTH_UPDATE_FAILURE)
    },
    callAPI: () =>
      userUpdateApi(username, updateData, getAuthUserToken(getState()))
  });
};

// Some helper functions. Often in these actions we just need to
// dispatch some UserAuthModal actions in addition to the UserAuth
// actions.
const onUserAuthFailure = failureActionType => (error, getState, dispatch) => {
  const errorMessage = apiRequestErrorHandler(error);
  dispatch(updateErrorMessage(errorMessage));
  dispatch({
    type: failureActionType,
    error: errorMessage
  });
};

const onUserAuthSuccess = successActionType => (data, getState, dispatch) => {
  dispatch({
    type: successActionType,
    data
  });
  dispatch(hideUserAuthModal());
};

// Use a thunk and redux-thunk to get the token rather than prop drilling it
export const userAuthLogout = () => (dispatch, getState) =>
  dispatch({
    type: API_USER_AUTH_LOGOUT,
    types: {
      request: USER_AUTH_LOGOUT_REQUEST,
      success: USER_AUTH_LOGOUT_SUCCESS,
      failure: USER_AUTH_LOGOUT_FAILURE
    },
    callAPI: () => userLogoutApi(getAuthUserToken(getState()))
  });
