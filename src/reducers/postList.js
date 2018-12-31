import {
  FETCH_POST_LIST_REQUEST,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_LIST_FAILURE,
  POST_VOTE_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from '../actions/actionTypes';
import { updateObjectOnVote } from '../utilities/reducerUtils';

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
    const { vote_state, ...newPost } = post;
    postsById[post.pk] = { ...newPost, voteDisplayState: vote_state, };
  })
  return postsById;
}

// TODO: figure out why this descruture isnt working right on postsById.
// For some reason rest still contains the postId element
const deletePost = (state, postId) => {
  const {
    [postId]: deletedOne ,
    ...rest
  } = state.postsById;
  delete rest[postId];

  const newAllPosts = [...state.allPosts];
  const deletionIndex = newAllPosts.indexOf(postId);
  newAllPosts.splice(deletionIndex,1);

  return {
    ...state,
    postsById: {...rest},
    allPosts: [...newAllPosts],
    deletionPostId: null,
  }
}

const initialState = {
  postsById: {},
  allPosts: [],
  loading: true,
  error: null,
  deletionPostId: null,
  deleteError: null,
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
    case POST_VOTE_SUCCESS:
      const postId = action.data.post;
      return {
        ...state,
        postsById: {
          ...state.postsById,
          [postId]: updateObjectOnVote(
            state.postsById[postId],
            action.data.vote_type,
          ),
        },
      }
  
    case DELETE_POST_REQUEST:
      return {
        ...state,
        deleteError: null,
        deletionPostId: Number(action.pk),
      };
    case DELETE_POST_SUCCESS:
      return deletePost(state, state.deletionPostId)
    default:
      return state;
    case DELETE_POST_FAILURE:
      return {
        ...state,
        deleteError: action.error,
      }
  }
};

// selectors

export const getPostById = (state, pk) => state.postList.postsById[pk];

export default postList;
