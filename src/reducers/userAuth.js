import {
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,  
  USER_AUTH_LOGIN_FAILURE,    
  USER_AUTH_LOGOUT,
  USER_AUTH_REGISTER
} from '../actions/actionTypes';

const initialState = {
  token: null,
  error: null,
  loading: false,
}

const userAuth = (state=initialState, action) => {
    switch (action.type) {
      case USER_AUTH_LOGIN_REQUEST:
        return {
          ...state,
          loading: true,         
        }
      case USER_AUTH_LOGIN_SUCCESS:
        return {
          ...state,
          token: action.token,
          loading: false,
          error: null
        };
      case USER_AUTH_LOGIN_FAILURE:
        return {
          ...state,
          token: null,
          loading: false,
          error: action.error
        };        
      case USER_AUTH_LOGOUT:
        return {
          token: null,
          error: null,
        };
      case USER_AUTH_REGISTER:
      default:
        return state;
    }
};

export default userAuth;