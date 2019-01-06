import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  results: null,
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
        results: action.data
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

export default search;
