import {
  FETCH_POST_COMMENT_TREES_REQUEST,
  FETCH_POST_COMMENT_TREES_SUCCESS,
  FETCH_POST_COMMENT_TREES_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  COMMENT_VOTE_SUCCESS,
} from '../actions/actionTypes';
import {
  updateObjectOnVote,
} from '../utilities/reducerUtils';


// Returns an object with rootCommentIds property to
// That includes the newcomment id at the top
const addRootCommentId = (state, newComment) => {
  let newRoots = state.rootCommentIds.slice();
  newRoots.splice(0,0,newComment.pk);
  return { rootCommentIds: newRoots };
}

// Returns a new commentsById object with the parent object
// updated to include the new child
const addChildCommentId = (state, newComment) => {
  const parentId = newComment.parent;
  const oldParent = state.commentsById[parentId];
  const newChildren = oldParent.children.slice();
  newChildren.splice(0,0,newComment.pk);
  const newParent = {
    ...oldParent,
    children: newChildren,
  };
  return { ...state.commentsById, [parentId]: newParent, };
}

// Handles adding the newComment id to either the rootCommentIds or
// the children array of the parent (depending on which is appropriate)
// Also adds the new comment to the commentsById object.
const addComment = (state, newComment) => {
  newComment['created'] = 'just now'
  // if it's a root comment
  if (newComment.post) {
    return (
      {
        ...addRootCommentId(state, newComment),
        commentsById: {...state.commentsById, [newComment.pk]: newComment,}
      }
    )
  } else if (newComment.parent) {
    const newCommentsById = addChildCommentId(state, newComment);
    return (
      {
      commentsById: {...newCommentsById, [newComment.pk]: newComment,}
      }
    )
  }
}

const initialState = {
  commentsById: {},
  postersById: {},
  rootCommentIds: [],
  error: null,
  loading: false,
  createCommentError: null,
  createCommentLoading: false,
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
        ...addComment(state, action.data),
        createCommentLoading: false,
        createCommentError: null,
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
    case COMMENT_VOTE_SUCCESS:
      const commentId = action.data.comment;
      return {
        ...state,
        commentsById: {
          ...state.commentsById,
          [commentId]: updateObjectOnVote(
            state.commentsById[commentId],
            action.data.vote_type,
          ),
        },
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

export const getVoteDisplayStateById = (state, pk) => (
  state.comments.commentsById[pk].voteDisplayState
)

export default comments;
