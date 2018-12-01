import {
  FETCH_SUB_DETAIL_REQUEST,
  FETCH_SUB_DETAIL_SUCCESS,
  FETCH_SUB_DETAIL_FAILURE,
  API_SUB_DETAIL,
  SET_SUB_TO_HOME,
  SUBREDDIT_SUBSCRIBE_REQUEST,
  SUBREDDIT_SUBSCRIBE_SUCCESS,
  SUBREDDIT_SUBSCRIBE_FAILURE,
  API_SUBREDDIT_SUBSCRIBE
} from '../actionTypes'

import { getSubDetailApi, subredditSubscribeApi } from '../../api/Subreddit';
import { makeUserUpdateRequest } from '../../actions/UserAuth';

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

// Getting the current token into the subscription request is
// a little tricky. We could just get it from the store connection
// to the subreddit container but it seems dumb to pass it all the way
// down just to give it to makeSubSubscriptionRequest. Instead use
// thunk middleware to do it.
export const makeSubSubscriptionRequest = (subredditTitle, subAction) =>
  (dispatch, getState) => dispatch(
    {
      type: API_SUBREDDIT_SUBSCRIBE,
      types: {
        request: SUBREDDIT_SUBSCRIBE_REQUEST,
        success: onSuccessfulSubscription,
        failure: SUBREDDIT_SUBSCRIBE_FAILURE,
      },
      callAPI: () => subredditSubscribeApi(
        subredditTitle,
        subAction,
        getState().userAuth.token
      ),
    }
  )

// When the request is successful we need to not only
// indicate it success in the subreddit state tree
// but also retrieve the modified user data from the backend
const onSuccessfulSubscription = (data, getState, dispatch) => {
  dispatch({
    type: SUBREDDIT_SUBSCRIBE_SUCCESS,
    data,
  })
  
  const username = getState().userAuth.username;
  return username
    ? dispatch(makeUserUpdateRequest(getState().userAuth.username))
    : null
  
}
