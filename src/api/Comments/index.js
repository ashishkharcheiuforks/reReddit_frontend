import axios from 'axios';

import {
 POST_COMMENT_TREES_URL,
} from '../constants'

export const getCommentTreeApi = (postPk) => (
  axios.get(POST_COMMENT_TREES_URL(postPk))
  .then(response => response.data)
)
