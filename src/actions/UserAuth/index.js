import {
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
  USER_AUTH_LOGIN_FAILURE,
  USER_AUTH_LOGOUT,
  USER_AUTH_REGISTER_REQUEST,
  USER_AUTH_REGISTER_SUCCESS,
  USER_AUTH_REGISTER_FAILURE,
} from '../actionTypes';

import { userLoginApi, userRegisterApi } from '../../api/UserAuth';
import {
  showUserAuthModal,
  hideUserAuthModal,
  updateErrorMessage
} from "../UserAuthModal";

export const makeUserLoginRequest = (username, password) => (
  {
    type: 'API_USER_AUTH_LOGIN',
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
    type: 'API_USER_AUTH_REGISTER',
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

export const userAuthLogout = () => (
  {
    type: USER_AUTH_LOGOUT,
  }
);

// When succesfully registered launch the login modal with
// success message
const successMessage = "User profile create! Please log in."
const registerSuccessLoginModal = () => showUserAuthModal(
  'login',
  successMessage
)
