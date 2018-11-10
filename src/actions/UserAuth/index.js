import {
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,  
  USER_AUTH_LOGIN_FAILURE,    
  USER_AUTH_LOGOUT,
  USER_AUTH_REGISTER
} from '../actionTypes';

import userLoginApi from '../../api/UserAuth';
import { hideUserAuthModal } from "../UserAuthModal";

export const makeUserLoginRequest = credentials => dispatch => {
  dispatch(userAuthLoginRequest());
  
  return userLoginApi(credentials)
          .then(data => dispatch(userAuthLoginSuccess(data)))
          .then(() => dispatch(hideUserAuthModal()))
          .catch(error => dispatch(userAuthLoginFailure(error)));
}

export const userAuthLoginRequest = () => (
  {
    type: USER_AUTH_LOGIN_REQUEST,
  }
);

export const userAuthLoginSuccess = (data) => (
  {
    type: USER_AUTH_LOGIN_SUCCESS,
    data
  }
);

export const userAuthLoginFailure= (error) => (
  {
    type: USER_AUTH_LOGIN_FAILURE,
    error
  }
);

export const userAuthLogout = () => (
  {
    type: USER_AUTH_LOGOUT,
  }
);

export const userAuthRegister = () => (
  {
    type: USER_AUTH_REGISTER,
  }
);

