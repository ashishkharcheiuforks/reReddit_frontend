import { combineReducers } from 'redux';

import userList from './userList';
import PostList from './PostList';

const rootReducer = combineReducers({
  userList,
  PostList
});

export default rootReducer;