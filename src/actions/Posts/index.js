import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SET_POSTS_SUBREDDIT,
} from '../actionTypes';

import { getSubPostListApi, getPostListApi } from '../../api/Posts';


export const makeSubPostListRequest = (subredditTitle, orderBy) => (
  {
    type: 'API_SUB_POST_LIST',
    types: {
      request: FETCH_POSTS_REQUEST,
      success: FETCH_POSTS_SUCCESS,
      failure: FETCH_POSTS_FAILURE,
    },
    callAPI: subredditTitle?
              () => getSubPostListApi(subredditTitle, orderBy):
              () => getPostListApi(orderBy),
  }
)

export const  setPostListSub = (subredditTitle) => (
  {
    type: SET_POSTS_SUBREDDIT,
    subredditTitle: subredditTitle,
  }
)
