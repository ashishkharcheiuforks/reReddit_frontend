import { combineReducers } from 'redux';

import subreddit from './subreddit';
import userAuth from './userAuth';
import userAuthModal from './userAuthModal';
import post from './post';

const rootReducer = combineReducers({
  subreddit,
  userAuth,
  userAuthModal,
  post,
});

export default rootReducer;
