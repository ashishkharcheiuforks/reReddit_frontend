import {
  FETCH_POST_LIST_REQUEST,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_LIST_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  postsById: {},
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

const postsById = (postList) => {
  let postsById = {};
  postList.forEach((post) => {
    postsById[post.pk] = post;
  })
  return postsById;
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
        postsById: postsById(action.data),
        allPosts: allPosts(action.data),
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

// selectors

export const getPostById = (state, pk) => state.postList.postsById[pk];

export default postList;
