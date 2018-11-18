import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actionTypes';

import { getSubPostListApi } from '../../api/Posts';


export const makeSubPostListRequest = (subredditTitle, orderBy) => (
  {
    type: 'API_SUB_POST_LIST',
    types: {
      request: FETCH_POSTS_REQUEST,
      success: FETCH_POSTS_SUCCESS,
      failure: FETCH_POSTS_FAILURE,
    },
    callAPI: () => getSubPostListApi(subredditTitle, orderBy),
  }
)
