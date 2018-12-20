import {
  FETCH_POST_COMMENT_TREES_REQUEST,
  FETCH_POST_COMMENT_TREES_SUCCESS,
  FETCH_POST_COMMENT_TREES_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  commentsById: {},
  rootCommentIds: [],
  postersById: {},
  error: null,
  loading: false,
  createCommentError: null,
  createCommentLoading: false,
}


const addComment = (state, action) => {
  const newComment = action.data;
  // if it's a root comment
  if (newComment.post) {
    
  }
  const oldComments = state.commentsById;
  return {
    ...state,
    [newComment.pk]: newComment,
  }
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
        commentsById: action.data.entities.comments,
        postersById: action.data.entities.posters,
        rootCommentIds: action.data.result,
        error: null,
        loading: null,
        createCommentError: null,
      }
    case FETCH_POST_COMMENT_TREES_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        createCommentLoading: false,
        createCommentError: null,
        commentsById: addComment(state, action),
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
    default:
      return state
  }
}


// // Selectors
// Ordered array of root comments, based on api ordering
export const getRootCommentPks = (state) => state.comments.rootCommentIds;

export const getCommentById = (state, pk) => state.comments.commentsById[pk];

export const getPosterByCommentId = (state, pk) => {
  const posterId = state.comments.commentsById[pk].poster;
  return state.comments.postersById[posterId];
}
  

export default comments
