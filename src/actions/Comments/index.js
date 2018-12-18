import {
  FETCH_POST_COMMENT_TREES_REQUEST,
  FETCH_POST_COMMENT_TREES_SUCCESS,
  FETCH_POST_COMMENT_TREES_FAILURE,
  API_POST_COMMENT_TREES,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  API_CREATE_COMMENT,
  COMMENT_VOTE_REQUEST,
  COMMENT_VOTE_SUCCESS,
  COMMENT_VOTE_FAILURE,
  API_COMMENT_VOTE,
} from '../actionTypes';
import {
  createCommentApi,
  getCommentTreeApi,
  commentVoteApi,
} from '../../api/Comments'

// Use redux-thunk to get the userAuth username
export const makeCommentTreeRequest = (postPk) =>
  (dispatch, getState) => dispatch(
    {
      type: API_POST_COMMENT_TREES,
      types: {
        request: FETCH_POST_COMMENT_TREES_REQUEST,
        success: FETCH_POST_COMMENT_TREES_SUCCESS,
        failure: FETCH_POST_COMMENT_TREES_FAILURE,
      },
      callAPI: () => getCommentTreeApi(postPk, getState().userAuth.username),
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

export const makeCommentVoteRequest = (voteData) =>
  (dispatch, getState) =>
   dispatch(
     {
       type: API_COMMENT_VOTE,
       types: {
         request: COMMENT_VOTE_REQUEST,
         success: COMMENT_VOTE_SUCCESS,
         failure: COMMENT_VOTE_FAILURE,
       },
       callAPI: () => commentVoteApi(
         voteData,
         getState().userAuth.token
       )
     }
   )
