import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from '../actions/actionTypes';
import { postsById, allIds } from '../utilities/reducerUtils';

const initialState = {
  query: '',
  allPosts: [], // pks
  postsById: {},
  userResults: [], // username
  subredditResults: [], //subreddit titles
  error: null,
  loading: false,
}

const search = (state=initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        query: action.query,
        loading: true,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        allPosts: allIds(action.data.posts),
        postsById: postsById(action.data.posts),
        userResults: action.data.users,
        subredditResults: action.data.subreddits,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state
  }
}

export const getSearchPostById = (state, id) => state.search.postsById[id];
export const getSearchAllPosts = (state) => state.search.allPosts;
export const getSearchUserResults = (state) => state.search.userResults;
export const getSearchSubredditResults = (state) => state.search.subredditResults;
export const getSearchError = (state) => state.search.error;

export default search;
