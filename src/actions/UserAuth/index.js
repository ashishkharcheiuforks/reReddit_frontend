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
  API_USER_AUTH_REGISTER,
} from '../actionTypes';

import {
  userLoginApi,
  userLogoutApi,
  userRegisterApi,
  userUpdateApi,
} from '../../api/UserAuth';
import {
  showUserAuthModal,
  hideUserAuthModal,
  updateErrorMessage
} from "../UserAuthModal";

export const makeUserLoginRequest = (username, password) => (
  {
    type: API_USER_AUTH_LOGIN,
    types: {
      request: USER_AUTH_LOGIN_REQUEST,
      success: USER_AUTH_LOGIN_SUCCESS,
      failure: USER_AUTH_LOGIN_FAILURE,
    },
    callAPI: () => userLoginApi({username, password}),
    successActionCreator: hideUserAuthModal,
    failureActionCreator: updateErrorMessage,
  }
)

export const makeUserRegisterRequest = (username, password, email) => (
  {
    type: API_USER_AUTH_REGISTER,
    types: {
      request: USER_AUTH_REGISTER_REQUEST,
      success: USER_AUTH_REGISTER_SUCCESS,
      failure: USER_AUTH_REGISTER_FAILURE,
    },
    callAPI: () => userRegisterApi({
        username,
        password,
        email
    }),
    failureActionCreator: updateErrorMessage,
    successActionCreator: registerSuccessLoginModal,
  }
)

// Use a thunk and redux-thunk to get the token rather than prop drilling it
export const userAuthLogout = () => (dispatch, getState) => dispatch(
  {
    type: API_USER_AUTH_LOGOUT,
    types: {
      request: USER_AUTH_LOGOUT_REQUEST,
      success: USER_AUTH_LOGOUT_SUCCESS,
      failure: USER_AUTH_LOGOUT_FAILURE,
    },
    callAPI: () => userLogoutApi(getState().userAuth.token),
  }
);

// When succesfully registered launch the login modal with
// success message
const successMessage = "User profile created! Please log in."
const registerSuccessLoginModal = () => showUserAuthModal(
  'login',
  successMessage
)

// Upon change to user backend we might need to reload the user data
export const makeUserUpdateRequest = (username) => (
  {
  type: API_USER_AUTH_UPDATE,
  types: {
    request: USER_AUTH_UPDATE_REQUEST,
    success: USER_AUTH_UPDATE_SUCCESS,
    failure: USER_AUTH_UPDATE_FAILURE,
  },
  callAPI: () => userUpdateApi(username),
  }
)
