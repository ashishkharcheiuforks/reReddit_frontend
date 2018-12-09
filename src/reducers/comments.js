import {
  FETCH_COMMENT_TREE_REQUEST,
  FETCH_COMMENT_TREE_SUCCESS,
  FETCH_COMMENT_TREE_FAILURE,
} from '../actions/actionTypes';
 
const initialState = {
  tree: null
  error: null
  loading: null
}

const comments = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENT_TREE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_COMMENT_TREE_SUCCESS:
      return {
        tree: action.data,
        error: null,
        loading: null,
      }
    case FETCH_COMMENT_TREE_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export default comments
