import {
  FETCH_SUB_DETAIL_REQUEST,
  FETCH_SUB_DETAIL_SUCCESS,
  FETCH_SUB_DETAIL_FAILURE,
} from '../actions/actionTypes';
import postList from './postList';

const initialState = {
  title: null,
  postList: postList(undefined, {type:""}),
  loading: false,
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
  
  switch (action.type) {
    case FETCH_SUB_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_SUB_DETAIL_SUCCESS:
     return {
       ...state,
       loading: false,
       error: null,
       title: action.data.title,
     };
    case FETCH_SUB_DETAIL_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
  
  
}

export default subreddit;
