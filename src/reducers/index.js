import { combineReducers } from 'redux';

import subreddit from './subreddit';
import userAuth from './userAuth';
import userAuthModal from './userAuthModal';
import post from './post';
import comments from './comments';

const rootReducer = combineReducers({
  subreddit,
  userAuth,
  userAuthModal,
  post,
  comments,
});

export default rootReducer;
