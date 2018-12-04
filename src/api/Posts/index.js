import axios from 'axios';

import {
  POST_LIST_URL,
  SUB_POST_LIST_URL,
  CREATE_POST_URL,
} from '../constants';
import { tokenContextObj } from '../apiUtils';

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

export const createPostApi = (title, body, subredditTitle, token) => {
  const data = { title, body };
  return axios.post(CREATE_POST_URL(subredditTitle), data, tokenContextObj(token))
           .then(response => response.data)
}
