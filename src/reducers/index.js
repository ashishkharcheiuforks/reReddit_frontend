import { combineReducers } from 'redux';

import userList from './userList';
import postList from './postList';
import userAuth from './userAuth';
import userAuthModal from './userAuthModal';

const rootReducer = combineReducers({
  userList,
  postList,
  userAuth,
  userAuthModal,
});

export default rootReducer;