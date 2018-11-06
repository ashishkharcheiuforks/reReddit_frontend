import { combineReducers } from 'redux';

import userList from './userList';
import PostList from './PostList';
import UserAuth from './UserAuth';

const rootReducer = combineReducers({
  userList,
  PostList,
  UserAuth,
});

export default rootReducer;