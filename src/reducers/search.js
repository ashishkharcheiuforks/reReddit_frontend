import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SET_SEARCH_QUERY,
} from '../actions/actionTypes';

const initialState = {
  query: '',
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
        loading: true,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userResults: action.data.users,
        subredditResults: action.data.subreddits,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.query,
      }
    default:
      return state
  }
}

export const getSearchUserResults = (state) => state.search.userResults;
export const getSearchSubredditResults = (state) => state.search.subredditResults;
export const getSearchError = (state) => state.search.error;
export const getSearchLoading = (state) => state.search.loading;
export const getSearchQuery = (state) => state.search.query;

export default search;
