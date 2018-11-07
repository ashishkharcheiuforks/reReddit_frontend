import axios from 'axios';

import { USER_LOGIN_URL } from '../constants';

const userLoginApi = (credentials) => (
  axios.post(
      USER_LOGIN_URL,
      credentials,
    )
    .then(response => response.data)
);

export default userLoginApi;