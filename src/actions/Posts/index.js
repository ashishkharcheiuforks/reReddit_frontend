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
  API_SUB_POST_LIST,
  API_CREATE_POST,
} from '../actionTypes';

import {
  getSubPostListApi,
  getPostListApi,
  createPostApi,
} from '../../api/Posts';


export const makeSubPostListRequest = (subredditTitle, orderBy) => (
  {
    type: API_SUB_POST_LIST,
    types: {
      request: FETCH_POST_LIST_REQUEST,
      success: FETCH_POST_LIST_SUCCESS,
      failure: FETCH_POST_LIST_FAILURE,
    },
    callAPI: subredditTitle?
              () => getSubPostListApi(subredditTitle, orderBy):
              () => getPostListApi(orderBy),
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
