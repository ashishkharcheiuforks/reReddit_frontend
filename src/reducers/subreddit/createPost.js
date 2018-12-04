import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  creating: false,
  error: null,
}

const createPost = (state=initialState, action) => {
  switch (action.type) {
    case CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
}

export default createPost;
