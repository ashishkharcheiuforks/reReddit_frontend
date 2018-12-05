import {
  FETCH_POST_DETAIL_REQUEST,
  FETCH_POST_DETAIL_SUCCESS,
  FETCH_POST_DETAIL_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  title: null,
  body: null,
  poster: null,
  error: null,
}

const post = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_POST_DETAIL_SUCCESS:
      return {
        title: action.data.title,
        body: action.data.body,
        poster: action.data.poster_username,
        error: null,
      }
    case FETCH_POST_DETAIL_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
     return state;
  }
}

export default post;
