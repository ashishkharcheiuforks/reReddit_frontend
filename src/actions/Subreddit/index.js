import {
  FETCH_SUB_DETAIL_REQUEST,
  FETCH_SUB_DETAIL_SUCCESS,
  FETCH_SUB_DETAIL_FAILURE,
  API_SUB_DETAIL,
  SET_SUB_TO_HOME,
} from '../actionTypes'

import { getSubDetailApi } from '../../api/Subreddit';

export const makeSubDetailRequest = (subredditTitle) => {
  if (subredditTitle) {
    return (
      {
        type: API_SUB_DETAIL,
        types: {
          request: FETCH_SUB_DETAIL_REQUEST,
          success: FETCH_SUB_DETAIL_SUCCESS,
          failure: FETCH_SUB_DETAIL_FAILURE,
        },
        callAPI: () => getSubDetailApi(subredditTitle),
      }
    );
  }
  
  return (
    {
      type: SET_SUB_TO_HOME,
      title: 'home',
    }
  )
}
  
