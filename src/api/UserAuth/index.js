import axios from 'axios';

import {
  USER_LOGIN_URL,
  USER_REGISTER_URL,
  USER_DETAIL_URL
} from '../constants';

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

export const userUpdateApi = (username) => (
  axios.get(USER_DETAIL_URL(username))
  .then(response => response.data)
)
