import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  subredditTitle : null,
  posts: null,
  loading: true,
  error: null,
}

const postList = (state=initialState, action) => {
  console.log(state,"action",  action)
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
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
    default:
      return state;
  }
};

export default postList;
