import axios from 'axios';

import { USER_LOGIN_URL, USER_REGISTER_URL } from '../constants';

export const userLoginApi = (credentials) => (
  axios.post(
      USER_LOGIN_URL,
      credentials,
    )
    .then(response => response.data)
);

export const userRegisterApi = (userData) => (
  axios.post(
    USER_REGISTER_URL,
    userData
  )
  .then(response => response.data)
)
