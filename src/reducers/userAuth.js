import {
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
  USER_AUTH_LOGIN_FAILURE,
  USER_AUTH_LOGOUT_SUCCESS,
  USER_AUTH_LOGOUT_FAILURE,
  USER_AUTH_REGISTER_REQUEST,
  USER_AUTH_REGISTER_FAILURE,
  USER_AUTH_UPDATE_REQUEST,
  USER_AUTH_UPDATE_SUCCESS,
  USER_AUTH_UPDATE_FAILURE,
  SHOW_USER_AUTH_MODAL,
  USER_AUTH_SUBSCRIBE_SUBREDDIT,
  USER_AUTH_UNSUBSCRIBE_SUBREDDIT
} from "../actions/actionTypes";
import { objectById } from "../utilities/reducerUtils";

const initialState = {
  token: null,
  username: null,
  pk: null,
  subredditsById: {},
  moderated_subs: [],
  error: null,
  loading: false
};

const findSubredditPkWithTitle = (state, title) => {
  const subreddit = Object.values(state.subredditsById).find(
    subreddit => subreddit.title === title
  );
  return subreddit ? subreddit.pk : null;
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
        subredditsById: objectById(action.data.subs),
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
    case USER_AUTH_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
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
    // given a new subscription and the data of that subreddit, add it
    // to the User auth subreddit list
    case USER_AUTH_SUBSCRIBE_SUBREDDIT:
      return {
        ...state,
        subredditsById: {
          ...state.subredditsById,
          [action.data.pk]: action.data
        }
      };
    // when a user unsubs from a subreddit we need to update the redux store
    case USER_AUTH_UNSUBSCRIBE_SUBREDDIT:
      delete state.subredditsById[
        findSubredditPkWithTitle(state, action.data.subredditTitle)
      ];
      return {
        ...state,
        subredditsById: { ...state.subredditsById }
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
  Object.values(state.userAuth.subredditsById).map(
    subreddit => subreddit.title
  );
export const getAuthUserSubreddits = state =>
  Object.values(state.userAuth.subredditsById);

export default userAuth;
