import {
  FETCH_POST_COMMENT_TREES_REQUEST,
  FETCH_POST_COMMENT_TREES_SUCCESS,
  FETCH_POST_COMMENT_TREES_FAILURE,
  API_POST_COMMENT_TREES,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  API_CREATE_COMMENT,
} from '../actionTypes';
import { createCommentApi, getCommentTreeApi } from '../../api/Comments'

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

// Use redux-thunk to grab the userAuth token
export const makeCreateCommentRequest = (commentData) =>
  (dispatch, getState) =>
    dispatch(
      {
        type: API_CREATE_COMMENT,
        types: {
          request: CREATE_COMMENT_REQUEST,
          success: CREATE_COMMENT_SUCCESS,
          failure: CREATE_COMMENT_FAILURE,
        },
        callAPI: () => createCommentApi(
          commentData,
          getState().userAuth.token
        ),
      }
)
