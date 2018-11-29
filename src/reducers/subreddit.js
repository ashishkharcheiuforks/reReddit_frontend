import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/actionTypes';
import postList from './postList';

const initialState = {
  title: null,
  postList: postList(undefined, {type:""}),
  loading: null,
  error: null,
}


const subreddit = (state=initialState, action) => {
  if (action.type && action.type.startsWith("FETCH_POSTS")) {
    return {
      ...state,
      postList: {
        ...postList(state.postList, action)
      },
    }
  };
  
  return {...state};
  
  // switch (action.type) {
  //   case '':
  //   default:
  //
  // }
  
  
}

export default subreddit;
