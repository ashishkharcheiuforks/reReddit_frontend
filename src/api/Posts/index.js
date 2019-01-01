import axios from 'axios';

import {
  POST_LIST_URL,
  POST_DETAIL_URL,
  SUB_POST_LIST_URL,
  CREATE_POST_URL,
} from '../constants';
import { tokenContextObj } from '../apiUtils';

export const getPostListApi = (orderBy, username) => {
  const params = {orderby: orderBy, username};
  return axios.get(POST_LIST_URL, {params,})
          .then(response => response.data)
}

export const getSubPostListApi = (subredditTitle, orderBy, username) => {
  const params = {orderby: orderBy, username};
  return axios.get(SUB_POST_LIST_URL(subredditTitle), {params,})
          .then(response => response.data)
}

export const createPostApi = (title, body, subredditTitle, token) => {
  const data = { title, body };
  return axios.post(CREATE_POST_URL(subredditTitle), data, tokenContextObj(token))
           .then(response => response.data)
}

export const updatePostApi = (pk, body, token) => {
  const data = { body };
  return axios.patch(POST_DETAIL_URL(pk), data, tokenContextObj(token))
           .then(response => response.data)
}

export const getPostDetailApi = (postId) => (
  axios.get(POST_DETAIL_URL(postId))
  .then(response => response.data)
)

export const deletePostApi = (pk, token) => {
  return axios.delete(POST_DETAIL_URL(pk), tokenContextObj(token))
    .then(response => response.data)
}
