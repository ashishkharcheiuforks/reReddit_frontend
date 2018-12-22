import {
  FETCH_POST_LIST_REQUEST,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_LIST_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  posts: null,
  allPosts: [],
  loading: true,
  error: null,
}

const allPosts = (postList) => {
  let allPosts = [];
  postList.forEach((post) => {
    allPosts.push(post.pk)
  })
  return allPosts;
}

const postList = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_POST_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POST_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.data,
        allPosts: allPosts(action.data)
      };
    case FETCH_POST_LIST_FAILURE:
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
