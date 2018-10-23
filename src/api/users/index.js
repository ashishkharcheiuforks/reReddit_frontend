import axios from 'axios'

import { USER_LIST_URL } from '../constants'

export const getUserList = () => {
  return axios.get(USER_LIST_URL)
          .then(response => response.data)
}