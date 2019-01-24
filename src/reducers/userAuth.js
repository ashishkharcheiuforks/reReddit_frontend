import {
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
  USER_AUTH_LOGIN_FAILURE,
  USER_AUTH_LOGOUT_REQUEST,
  USER_AUTH_LOGOUT_SUCCESS,
  USER_AUTH_LOGOUT_FAILURE,
  USER_AUTH_REGISTER_REQUEST,
  USER_AUTH_UPDATE_REQUEST,
  USER_AUTH_UPDATE_SUCCESS,
  USER_AUTH_UPDATE_FAILURE,
  SHOW_USER_AUTH_MODAL
} from "../actions/actionTypes";

const initialState = {
  token: null,
  username: null,
  pk: null,
  subs: [],
  moderated_subs: [],
  error: null,
  loading: false
};

const userAuth = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case USER_AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.data.token,
        username: action.data.username,
        pk: action.data.pk,
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
    case USER_AUTH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case USER_AUTH_LOGOUT_SUCCESS:
      return initialState;
    case USER_AUTH_LOGOUT_FAILURE:
      // Even if they fail for some reason, still just log out.
      // This is important so that we let people log out even with
      // a bad token
      return initialState;
    case USER_AUTH_UPDATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case USER_AUTH_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case USER_AUTH_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    // When they reload the modal, forget what happened before
    case SHOW_USER_AUTH_MODAL:
      return {
        ...state,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

// Selectors

export const getAuthUsername = state => state.userAuth.username;
export const getAuthUserToken = state => state.userAuth.token;
export const getAuthUserLoading = state => state.userAuth.loading;
export const getAuthUserSubredditTitles = state =>
  state.userAuth.subs.map(subreddit => subreddit.title);
export const getAuthUserSubreddits = state => state.userAuth.subs;

export default userAuth;
