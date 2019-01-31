import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CLEAR_CREATE_POST_ERROR
} from "../actions/actionTypes";

const initialState = {
  creating: false,
  error: null,
  loading: false
};

const createPost = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case CLEAR_CREATE_POST_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

// selectors

export const getCreatePostLoading = state => state.createPost.loading;
export const getCreatePostError = state => state.createPost.error;

export default createPost;
