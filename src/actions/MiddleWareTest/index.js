import {
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
  USER_AUTH_LOGIN_FAILURE,
} from '../actionTypes';

import { userLoginApi } from '../../api/UserAuth';

export const middleWareTest = (username, password) => {

  return {
      type: 'API_USER_LOGIN',
      types: {
        request: USER_AUTH_LOGIN_REQUEST,
        success: USER_AUTH_LOGIN_SUCCESS,
        failure: USER_AUTH_LOGIN_FAILURE,
      },
      callAPI: () => userLoginApi({username, password})
    }
}

export const userAuthLoginRequest = () => (
  {
    type: 'USER_AUTH_LOGIN_REQUEST',
  }
);
