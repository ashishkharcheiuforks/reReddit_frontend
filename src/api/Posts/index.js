import axios from 'axios';

import { POST_LIST_URL, SUB_POST_LIST_URL } from '../constants';

export const getPostListApi = (orderBy) => {
  const params = {orderby: orderBy};
  return axios.get(POST_LIST_URL, {params,})
          .then(response => response.data)
}

export const getSubPostListApi = (subredditTitle, orderBy) => {
  const params = {orderby: orderBy};
  return axios.get(SUB_POST_LIST_URL(subredditTitle), {params,})
          .then(response => response.data)
}
