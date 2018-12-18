import {
  VOTE_REQUEST,
  VOTE_SUCCESS,
  VOTE_FAILURE,
  API_VOTE,
} from '../actionTypes';

import { voteApi } from '../../api/Voter';

// use thunk to get token
export const makeVoteRequest = (voteData) =>
  (dispatch, getState) =>
    dispatch(
      {
        type: API_VOTE,
        types: {
          request: VOTE_REQUEST,
          success: VOTE_SUCCESS,
          failure: VOTE_FAILURE,
        },
        callAPI: () => voteApi(
          voteData,
          getState().userAuth.token
        ),
      }
    )
