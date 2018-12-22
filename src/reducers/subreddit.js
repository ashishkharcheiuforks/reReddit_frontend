import {
  FETCH_SUB_DETAIL_REQUEST,
  FETCH_SUB_DETAIL_SUCCESS,
  FETCH_SUB_DETAIL_FAILURE,
  SET_SUB_TO_HOME,
  SUBREDDIT_SUBSCRIBE_REQUEST,
  SUBREDDIT_SUBSCRIBE_FAILURE,
  SUBREDDIT_SUBSCRIBE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  title: null,
  description: null,
  subscriptionLoading: false,
}

const subreddit = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_SUB_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_SUB_DETAIL_SUCCESS:
     return {
       ...state,
       loading: false,
       error: null,
       title: action.data.title,
       description: action.data.description,
     };
    case FETCH_SUB_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case SET_SUB_TO_HOME:
      return {
        ...state,
        loading: false,
        error: null,
        title: action.title,
      }
    case SUBREDDIT_SUBSCRIBE_REQUEST:
      return {
        ...state,
        subscriptionLoading: true,
      }
    case SUBREDDIT_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        subscriptionLoading: false,
      }
    case SUBREDDIT_SUBSCRIBE_FAILURE:
      return {
        ...state,
        subscriptionLoading: false,
      }
    default:
      return state;
  }
}

export default subreddit;
