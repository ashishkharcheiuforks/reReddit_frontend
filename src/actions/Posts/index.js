import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../actionTypes';

import getPostListApi from '../../api/Posts';

const fetchPostList = () => dispatch => {
  dispatch(fetchPostsRequest())
  
  getPostListApi()
  .then(posts => dispatch(fetchPostsSuccess(posts)))
  .catch(error => dispatch(fetchPostsFailure(error)));
}

const fetchPostsRequest = () => (
  {
    type: FETCH_POSTS_REQUEST
  }
);

const fetchPostsSuccess = (posts) => (
  {
    type: FETCH_POSTS_SUCCESS,
    posts,
  }
);

const fetchPostsFailure = (error) => (
  {
    type: FETCH_POSTS_FAILURE,
    error,
  }
);

export default fetchPostList;