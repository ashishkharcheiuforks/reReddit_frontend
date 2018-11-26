import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SET_POSTS_SUBREDDIT,
} from '../actions/actionTypes';

const initialState = {
  subredditTitle : null,
  posts: null,
  loading: true,
  error: null,
}

const postList = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      console.log(action.data)
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.data,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_POSTS_SUBREDDIT:
      return {
        ...state,
        subredditTitle: action.subredditTitle,
      }
    default:
      return state;
  }
};

export default postList;
