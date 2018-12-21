import {
  VOTE_REQUEST,
  VOTE_SUCCESS,
  VOTE_FAILURE,
  COMMENT_VOTE_SUCCESS,
  POST_VOTE_SUCCESS,
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
          success: onVoteSuccess,
          failure: VOTE_FAILURE,
        },
        callAPI: () => voteApi(
          voteData,
          getState().userAuth.token
        ),
      }
    )

const onVoteSuccess = (data, getState, dispatch) => {
  if (data.hasOwnProperty('comment')) {
    dispatch({
      type: COMMENT_VOTE_SUCCESS,
      data
    })
  } else if (data.hasOwnProperty('post')) {
    dispatch({
      type: POST_VOTE_SUCCESS,
      data
    })
  }
  
  throw new ReferenceError(
    'Upvote is of unknown type',
    'actions/Voter/index.js',
    41
  )
}
