import {
  USER_AUTH_LOGIN,
  USER_AUTH_LOGOUT,
  USER_AUTH_REGISTER
} from '../actionTypes';

export const userAuthLogin = () => (
  {
    type: USER_AUTH_LOGIN,
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

