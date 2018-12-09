import axios from 'axios';

import {
 COMMENT_TREE_URL,
} from '../constants'

export const getCommentTreeApi = (postPk) => (
  axios.get(COMMENT_TREE_URL)
  .then(response => response.data)
)
