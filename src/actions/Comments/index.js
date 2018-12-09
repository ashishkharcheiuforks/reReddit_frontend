import {
  FETCH_COMMENT_TREE_REQUEST,
  FETCH_COMMENT_TREE_SUCCESS,
  FETCH_COMMENT_TREE_FAILURE,
} from '../actionTypes';
import { getCommentTreeApi } from '../../api/Comments'

export const makeCommentTreeRequest = (postPk) => (
  {
    type: API_COMMENT_TREE,
    types: {
      request: FETCH_COMMENT_TREE_REQUEST,
      success: FETCH_COMMENT_TREE_SUCCESS,
      failure: FETCH_COMMENT_TREE_FAILURE,
    },
    callAPI: getCommentTreeApi(postPk),
  }
)
