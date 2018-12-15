import axios from 'axios';

import {
 POST_COMMENT_TREES_URL,
 COMMENT_LIST_URL,
 COMMENT_VOTE_URL,
} from '../constants'
import { tokenContextObj } from '../apiUtils';

export const getCommentTreeApi = (postPk) => (
  axios.get(POST_COMMENT_TREES_URL(postPk))
  .then(response => response.data)
)

export const createCommentApi = (commentData, token) => {
  const {
    body,
    parentPk,
    rootComment,
  } = commentData;
  // See backend, a 'fullname' is constructed to specify the parent of the comment
  const parentFn = rootComment ? `t2_${parentPk}` : `t1_${parentPk}`;
  const data = {body, parent_fn:parentFn};
  return axios.post(COMMENT_LIST_URL, data, tokenContextObj(token))
    .then(response => response.data)
}

export const commentVoteApi = (voteData, token) => {
  const {
    vote_type,
    comment_pk: comment,
  } = voteData;
  
  const data = {vote_type, comment};
  return axios.post(COMMENT_VOTE_URL, data, tokenContextObj(token))
    .then(response => response.data)
}
