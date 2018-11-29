import {
  FETCH_SUB_DETAIL_REQUEST,
  FETCH_SUB_DETAIL_SUCCESS,
  FETCH_SUB_DETAIL_FAILURE,
  API_SUB_DETAIL,
} from '../actionTypes'

import { getSubDetailApi } from '../../api/Subreddit';

export const makeSubDetailRequest = (subredditTitle) => (
  {
    type: API_SUB_DETAIL,
    types: {
      request: FETCH_SUB_DETAIL_REQUEST,
      success: FETCH_SUB_DETAIL_SUCCESS,
      failure: FETCH_SUB_DETAIL_FAILURE,
    },
    callAPI: () => getSubDetailApi(subredditTitle),
  }
)
