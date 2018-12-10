import {
  FETCH_POST_COMMENT_TREES_REQUEST,
  FETCH_POST_COMMENT_TREES_SUCCESS,
  FETCH_POST_COMMENT_TREES_FAILURE,
  API_POST_COMMENT_TREES,
} from '../actionTypes';
import { getCommentTreeApi } from '../../api/Comments'

export const makeCommentTreeRequest = (postPk) => (
  {
    type: API_POST_COMMENT_TREES,
    types: {
      request: FETCH_POST_COMMENT_TREES_REQUEST,
      success: FETCH_POST_COMMENT_TREES_SUCCESS,
      failure: FETCH_POST_COMMENT_TREES_FAILURE,
    },
    callAPI: () => getCommentTreeApi(postPk),
  }
)
