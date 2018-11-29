import { combineReducers } from 'redux';

import userList from './userList';
import subreddit from './subreddit';
import userAuth from './userAuth';
import userAuthModal from './userAuthModal';

const rootReducer = combineReducers({
  userList,
  subreddit,
  userAuth,
  userAuthModal,
});

export default rootReducer;
