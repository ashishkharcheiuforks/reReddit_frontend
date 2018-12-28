import { combineReducers } from 'redux';

import subreddit from './subreddit';
import userAuth from './userAuth';
import userAuthModal from './userAuthModal';
import postDetail from './postDetail';
import comments from './comments';
import postList from './postList';
import createPost from './createPost';

const rootReducer = combineReducers({
  subreddit,
  userAuth,
  userAuthModal,
  postDetail,
  comments,
  postList,
  createPost,
});

export default rootReducer;
