import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  users: null,
  error: null,
}

const PostList = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: action.posts,
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

export default PostList;