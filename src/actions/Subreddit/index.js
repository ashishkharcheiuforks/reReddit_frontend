import {
  FETCH_SUB_DETAIL_REQUEST,
  FETCH_SUB_DETAIL_SUCCESS,
  FETCH_SUB_DETAIL_FAILURE,
  API_SUB_DETAIL,
  SET_SUB_TO_HOME,
  SUBREDDIT_SUBSCRIBE_REQUEST,
  SUBREDDIT_SUBSCRIBE_SUCCESS,
  SUBREDDIT_SUBSCRIBE_FAILURE,
  API_SUBREDDIT_SUBSCRIBE,
  SUBREDDIT_SUBSCRIPTION_CHECK
} from '../actionTypes'

import { getSubDetailApi, subredditSubscribeApi } from '../../api/Subreddit';
import { store } from '../../store';

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
        successActionCreator: checkSubredditSubscription,
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

// After a successful fetch of the sub detail this is called
// by the middleware. Check to see if user is logged in and if
// so if they are subscribed to the subreddit
export const checkSubredditSubscription = (requestData) => {
  const subscribedSubs = store.getState().userAuth.subs.map(sub => sub.title);

  let subscribed = false;
  if (subscribedSubs && subscribedSubs.includes(requestData.title)) {
    subscribed = true;
  }
  
  return (
    {
    type: SUBREDDIT_SUBSCRIPTION_CHECK,
    subscribed: subscribed,
    }
  );
}

// Getting the current token into the subscriptoin request is
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
        success: SUBREDDIT_SUBSCRIBE_SUCCESS,
        failure: SUBREDDIT_SUBSCRIBE_FAILURE,
      },
      callAPI: () => subredditSubscribeApi(
        subredditTitle,
        subAction,
        getState().userAuth.token
      ),
    }
  )

  
