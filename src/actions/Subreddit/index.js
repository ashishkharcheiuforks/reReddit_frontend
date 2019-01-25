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
  CREATE_SUBREDDIT_REQUEST,
  CREATE_SUBREDDIT_SUCCESS,
  CREATE_SUBREDDIT_FAILURE,
  DELETE_SUBREDDIT_REQUEST,
  DELETE_SUBREDDIT_SUCCESS,
  DELETE_SUBREDDIT_FAILURE,
  API_CREATE_SUBREDDIT,
  USER_AUTH_SUBSCRIBE_SUBREDDIT,
  USER_AUTH_UNSUBSCRIBE_SUBREDDIT
} from "../actionTypes";

import {
  getSubDetailApi,
  subredditSubscribeApi,
  createSubredditApi
} from "../../api/Subreddit";
import { makeUserUpdateRequest } from "../../actions/UserAuth";

export const makeSubDetailRequest = subredditTitle => ({
  type: API_SUB_DETAIL,
  types: {
    request: FETCH_SUB_DETAIL_REQUEST,
    success: FETCH_SUB_DETAIL_SUCCESS,
    failure: FETCH_SUB_DETAIL_FAILURE
  },
  callAPI: () => getSubDetailApi(subredditTitle)
});

export const makeCreateSubredditRequest = subredditData => (
  dispatch,
  getState
) =>
  dispatch({
    type: API_CREATE_SUBREDDIT,
    types: {
      request: CREATE_SUBREDDIT_REQUEST,
      success: CREATE_SUBREDDIT_SUCCESS,
      failure: CREATE_SUBREDDIT_FAILURE
    },
    callAPI: () => createSubredditApi(subredditData, getState().userAuth.token)
  });

// Get token from redux-thunk
export const makeSubSubscriptionRequest = (subredditTitle, subAction) => (
  dispatch,
  getState
) =>
  dispatch({
    type: API_SUBREDDIT_SUBSCRIBE,
    types: {
      request: SUBREDDIT_SUBSCRIBE_REQUEST,
      success: onSuccessfulSubscription(subredditTitle, subAction),
      failure: SUBREDDIT_SUBSCRIBE_FAILURE
    },
    callAPI: () =>
      subredditSubscribeApi(
        subredditTitle,
        subAction,
        getState().userAuth.token
      )
  });

// When the request is successful we need to not only
// indicate it success in the subreddit state tree
// but also retrieve the modified user data from the backend
const onSuccessfulSubscription = (subredditTitle, subAction) => (
  data,
  getState,
  dispatch
) => {
  dispatch({
    type: SUBREDDIT_SUBSCRIBE_SUCCESS,
    data
  });
  if (subAction.toLowerCase() === "sub") {
    return dispatch({
      type: USER_AUTH_SUBSCRIBE_SUBREDDIT,
      data
    });
  }
  return dispatch({
    type: USER_AUTH_UNSUBSCRIBE_SUBREDDIT,
    data: { subredditTitle }
  });

  // const username = getState().userAuth.username;
  // return username
  //   ? dispatch(makeUserUpdateRequest(getState().userAuth.username))
  //   : null;
};
