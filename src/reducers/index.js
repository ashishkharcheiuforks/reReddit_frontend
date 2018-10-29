import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  loading : true,
  users: null,
  error: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading : true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.users,
        error: null,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error:action.error,
      };
    default:
      return state;
      
  }
}

export default rootReducer;