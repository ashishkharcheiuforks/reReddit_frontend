import { combineReducers } from 'redux';

import userList from './userList';
import subreddit from './subreddit';
import userAuth from './userAuth';
import userAuthModal from './userAuthModal';
import post from './post';

const rootReducer = combineReducers({
  userList,
  subreddit,
  userAuth,
  userAuthModal,
  post,
});

export default rootReducer;
