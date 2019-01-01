import {
  FETCH_POST_LIST_REQUEST,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_LIST_FAILURE,
  FETCH_POST_DETAIL_REQUEST,
  FETCH_POST_DETAIL_SUCCESS,
  FETCH_POST_DETAIL_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  API_SUB_POST_LIST,
  API_CREATE_POST,
  API_DELETE_POST,
  API_POST_DETAIL,
} from '../actionTypes';

import {
  getSubPostListApi,
  getPostListApi,
  getPostDetailApi,
  createPostApi,
  deletePostApi,
  updatePostApi,
} from '../../api/Posts';


// use redux-thunk for userAuth username
export const makeSubPostListRequest = (subredditTitle, orderBy) =>
  (dispatch, getState) => dispatch(
  {
    type: API_SUB_POST_LIST,
    types: {
      request: FETCH_POST_LIST_REQUEST,
      success: FETCH_POST_LIST_SUCCESS,
      failure: FETCH_POST_LIST_FAILURE,
    },
    callAPI: subredditTitle
      ? () => getSubPostListApi(
        subredditTitle,
        orderBy,
        getState().userAuth.username
      )
      : () => getPostListApi(orderBy, getState().userAuth.username),
  }
);

// Using redux-thunk to get an auth token
export const makeCreatePostRequest = (title, body, subredditTitle) =>
  (dispatch, getState) =>
    dispatch(
      {
        type: API_CREATE_POST,
        types: {
          request: CREATE_POST_REQUEST,
          success: CREATE_POST_SUCCESS,
          failure: CREATE_POST_FAILURE,
        },
        callAPI: () => createPostApi(
          title,
          body,
          subredditTitle,
          getState().userAuth.token
        )
      }
    )
    
// Using redux-thunk to get an auth token
export const makeUpdatePostRequest = (pk, body) =>
  (dispatch, getState) =>
    dispatch(
      {
        type: API_CREATE_POST,
        types: {
          request: CREATE_POST_REQUEST,
          success: CREATE_POST_SUCCESS,
          failure: CREATE_POST_FAILURE,
        },
        callAPI: () => updatePostApi(
          pk,
          body,
          getState().userAuth.token
        )
      }
    )
    
export const makeDeletePostRequest = (pk) =>
  (dispatch, getState) =>
    dispatch(
      {
        type: API_DELETE_POST,
        types: {
          request: onDeletePostRequest(pk),
          success: DELETE_POST_SUCCESS,
          failure: DELETE_POST_FAILURE,
        },
        callAPI: () => deletePostApi(pk, getState().userAuth.token),
      }
    )
    
// Use a thunk action creator to get the pk added to the REQUEST action
const onDeletePostRequest = (pk) => (dispatch) => dispatch({
      type: DELETE_POST_REQUEST,
      pk,
})

export const makePostDetailRequest = (postId) => (
  {
    type: API_POST_DETAIL,
    types: {
      request: FETCH_POST_DETAIL_REQUEST,
      success: FETCH_POST_DETAIL_SUCCESS,
      failure: FETCH_POST_DETAIL_FAILURE,
    },
    callAPI: () => getPostDetailApi(postId),
  }
)
