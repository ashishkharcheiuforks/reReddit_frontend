import {
  VOTE_REQUEST,
  VOTE_SUCCESS,
  VOTE_FAILURE,
  COMMENT_VOTE_SUCCESS,
  POST_VOTE_SUCCESS,
  API_VOTE
} from "../actionTypes";

import { voteApi } from "../../api/Voter";
import { getAuthUsername } from "../../reducers/userAuth";
import { showUserAuthModal } from "../UserAuthModal";

// use thunk to get token
export const makeVoteRequest = voteData => (dispatch, getState) => {
  const state = getState();

  if (!getAuthUsername(state)) {
    return dispatch(showUserAuthModal("login"));
  }

  return dispatch({
    type: API_VOTE,
    types: {
      request: VOTE_REQUEST,
      success: onVoteSuccess,
      failure: VOTE_FAILURE
    },
    callAPI: () => voteApi(voteData, getState().userAuth.token)
  });
};

const onVoteSuccess = (data, getState, dispatch) => {
  if (data.hasOwnProperty("comment")) {
    return dispatch({
      type: COMMENT_VOTE_SUCCESS,
      data
    });
  } else if (data.hasOwnProperty("post")) {
    return dispatch({
      type: POST_VOTE_SUCCESS,
      data
    });
  }

  throw new ReferenceError(
    "Upvote is of unknown type",
    "actions/Voter/index.js",
    41
  );
};
