import {
  USER_AUTH_LOGIN,
  USER_AUTH_LOGOUT,
  USER_AUTH_REGISTER
} from '../actions/actionTypes';

const initialState = {
  token: null,
  username: null,
  subscriptions: null,
  moderatedSubs: null,
  error: null
}

const userAuth = (state=initialState, action) => {
    switch (action.type) {
      case USER_AUTH_LOGIN:
        return {
          ...state,
          token: action.token,
          username: action.username,
          subscriptions: action.subscriptions,
          moderatedSubs: action.moderatedSubs,
          error: null,
        };
      case USER_AUTH_LOGOUT:
        return {
          token: null,
          username: null,
          subscriptions: null,
          moderatedSubs: null,
          error: null,
        }
      case USER_AUTH_REGISTER:
      default:
        return state;
    }
};

export default userAuth;