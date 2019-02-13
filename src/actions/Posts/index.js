import {
  FETCH_POST_LIST_REQUEST,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_LIST_FAILURE,
  FETCH_POST_LIST_NEXT_REQUEST,
  FETCH_POST_LIST_NEXT_SUCCESS,
  FETCH_POST_LIST_NEXT_FAILURE,
  FETCH_POST_DETAIL_REQUEST,
  FETCH_POST_DETAIL_SUCCESS,
  FETCH_POST_DETAIL_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CLEAR_CREATE_POST_ERROR,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  API_SUB_POST_LIST,
  API_SUB_POST_LIST_NEXT,
  API_CREATE_POST,
  API_UPDATE_POST,
  API_DELETE_POST,
  API_POST_DETAIL,
  TOGGLE_POST_EDITOR
} from "../actionTypes";

import {
  getSubPostListApi,
  getSubPostListNextApi,
  getPostDetailApi,
  createPostApi,
  deletePostApi,
  updatePostApi
} from "../../api/Posts";
import { getAuthUserToken } from "../../reducers/userAuth";

// use redux-thunk for userAuth username
export const makeSubPostListRequest = (subredditTitle, orderBy) => (
  dispatch,
  getState
) =>
  dispatch({
    type: API_SUB_POST_LIST,
    types: {
      request: FETCH_POST_LIST_REQUEST,
      success: FETCH_POST_LIST_SUCCESS,
      failure: FETCH_POST_LIST_FAILURE
    },
    callAPI: () =>
      getSubPostListApi(subredditTitle, orderBy, getAuthUserToken(getState()))
  });

export const makeSubPostListNextRequest = url => (dispatch, getState) =>
  dispatch({
    type: API_SUB_POST_LIST_NEXT,
    types: {
      request: FETCH_POST_LIST_NEXT_REQUEST,
      success: FETCH_POST_LIST_NEXT_SUCCESS,
      failure: FETCH_POST_LIST_NEXT_FAILURE
    },
    callAPI: () => getSubPostListNextApi(url, getAuthUserToken(getState()))
  });

// Using redux-thunk to get an auth token
export const makeCreatePostRequest = (title, body, subredditTitle) => (
  dispatch,
  getState
) =>
  dispatch({
    type: API_CREATE_POST,
    types: {
      request: CREATE_POST_REQUEST,
      success: CREATE_POST_SUCCESS,
      failure: CREATE_POST_FAILURE
    },
    callAPI: () =>
      createPostApi(title, body, subredditTitle, getState().userAuth.token)
  });

// Using redux-thunk to get an auth token
export const makeUpdatePostRequest = (pk, body) => (dispatch, getState) =>
  dispatch({
    type: API_UPDATE_POST,
    types: {
      request: UPDATE_POST_REQUEST,
      success: UPDATE_POST_SUCCESS,
      failure: UPDATE_POST_FAILURE
    },
    callAPI: () => updatePostApi(pk, body, getState().userAuth.token)
  });

export const makeDeletePostRequest = pk => (dispatch, getState) =>
  dispatch({
    type: API_DELETE_POST,
    types: {
      request: onDeletePostRequest(pk),
      success: DELETE_POST_SUCCESS,
      failure: DELETE_POST_FAILURE
    },
    callAPI: () => deletePostApi(pk, getState().userAuth.token)
  });

// Use a thunk action creator to get the pk added to the REQUEST action
const onDeletePostRequest = pk => dispatch =>
  dispatch({
    type: DELETE_POST_REQUEST,
    pk
  });

export const makePostDetailRequest = postId => (dispatch, getState) =>
  dispatch({
    type: API_POST_DETAIL,
    types: {
      request: FETCH_POST_DETAIL_REQUEST,
      success: FETCH_POST_DETAIL_SUCCESS,
      failure: FETCH_POST_DETAIL_FAILURE
    },
    callAPI: () => getPostDetailApi(postId, getAuthUserToken(getState()))
  });

export const togglePostEditor = () => ({
  type: TOGGLE_POST_EDITOR
});

export const clearCreatePostError = () => ({
  type: CLEAR_CREATE_POST_ERROR
});
