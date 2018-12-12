import axios from 'axios';

import {
 POST_COMMENT_TREES_URL,
 COMMENT_LIST_URL,
} from '../constants'
import { tokenContextObj } from '../apiUtils';

export const getCommentTreeApi = (postPk) => (
  axios.get(POST_COMMENT_TREES_URL(postPk))
  .then(response => response.data)
)

export const createCommentApi = (body, parentFn, token) => {
  const data = {body, parent_fn:parentFn};
  return axios.post(COMMENT_LIST_URL, data, tokenContextObj(token))
    .then(response => response.data)
}
