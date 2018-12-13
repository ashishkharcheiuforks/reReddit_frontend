import {
  FETCH_POST_COMMENT_TREES_REQUEST,
  FETCH_POST_COMMENT_TREES_SUCCESS,
  FETCH_POST_COMMENT_TREES_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  trees: null,
  error: null,
  loading: false,
  createCommentError: null,
  createCommentLoading: false,
  createdComment: null, //Used to temporarily bump created comment to top
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
        ...state,
        trees: action.data,
        error: null,
        loading: null,
        createdComment: null,
        createCommentError: null,
      }
    case FETCH_POST_COMMENT_TREES_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        createCommentLoading: true,
        createCommentError: null,
      }
    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        createCommentLoading: false,
        createCommentError: action.error,
      }
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        createCommentLoading: false,
        createCommentError: null,
        createdComment: action.data,
      }
    default:
      return state
  }
}

export default comments
