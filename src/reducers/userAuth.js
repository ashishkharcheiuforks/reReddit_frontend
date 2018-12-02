import {
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
  USER_AUTH_LOGIN_FAILURE,
  USER_AUTH_LOGOUT_REQUEST,
  USER_AUTH_LOGOUT_SUCCESS,
  USER_AUTH_LOGOUT_FAILURE,
  USER_AUTH_UPDATE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  token: null,
  username: null,
  subs: [],
  moderated_subs: [],
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
          token: action.data.token,
          username: action.data.username,
          subs: action.data.subs,
          moderated_subs: action.data.moderated_subs,
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
      case USER_AUTH_LOGOUT_SUCCESS:
        return initialState;
      case USER_AUTH_UPDATE_SUCCESS:
        return {
          ...state,
          username: action.data.username,
          subs: action.data.subs,
          moderated_subs: action.data.moderated_subs,
          loading: false,
          error: null
        }
      default:
        return state;
    }
};

export default userAuth;
