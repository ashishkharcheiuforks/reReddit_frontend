import {
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
  USER_AUTH_LOGIN_FAILURE,
  USER_AUTH_LOGOUT
} from '../actionTypes';

import { userLoginApi } from '../../api/UserAuth';
import { hideUserAuthModal } from "../UserAuthModal";

export const makeUserLoginRequest = (username, password) => (
  {
    type: 'API_USER_LOGIN',
    types: {
      request: USER_AUTH_LOGIN_REQUEST,
      success: USER_AUTH_LOGIN_SUCCESS,
      failure: USER_AUTH_LOGIN_FAILURE,
    },
    callAPI: () => userLoginApi({username, password})
  }
)

export const userAuthLogout = () => (
  {
    type: USER_AUTH_LOGOUT,
  }
);
