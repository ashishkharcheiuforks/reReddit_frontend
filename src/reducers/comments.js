import {
  FETCH_POST_COMMENT_TREES_REQUEST,
  FETCH_POST_COMMENT_TREES_SUCCESS,
  FETCH_POST_COMMENT_TREES_FAILURE,
} from '../actions/actionTypes';
 
const initialState = {
  trees: null,
  error: null,
  loading: null,
}

const comments = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_POST_COMMENT_TREES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_POST_COMMENT_TREES_SUCCESS:
      return {
        trees: action.data,
        error: null,
        loading: null,
      }
    case FETCH_POST_COMMENT_TREES_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export default comments
