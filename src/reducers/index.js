import { combineReducers } from 'redux';

import userList from './userList';
import postList from './postList';
import userAuth from './userAuth';
import userAuthModal from './userAuthModal';
import middleWareTest from './middleWareTest';

const rootReducer = combineReducers({
  userList,
  postList,
  userAuth,
  userAuthModal,
  middleWareTest,
});

export default rootReducer;
