import axios from 'axios';

import { POST_LIST_URL, SUB_POST_LIST_URL } from '../constants';

export const getPostListApi = () => {
  return axios.get(POST_LIST_URL)
          .then(response => response.data)
}

export const getSubPostListApi = (subredditTitle, orderBy) => {
  return axios.get(SUB_POST_LIST_URL(subredditTitle))
          .then(response => response.data)
}
