import {
  FETCH_POST_DETAIL_REQUEST,
  FETCH_POST_DETAIL_SUCCESS,
  FETCH_POST_DETAIL_FAILURE,
  FETCH_POST_LIST_SUCCESS,
  UPDATE_POST_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  title: null,
  body: null,
  poster: null,
  pk: null,
  error: null,
  loading: false,
}

const postDetail = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_POST_DETAIL_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case FETCH_POST_DETAIL_SUCCESS:
      return {
        ...state,
        title: action.data.title,
        body: action.data.body,
        poster: action.data.poster_username,
        pk: action.data.pk,
        loading: false,
        error: null,
      }
    case FETCH_POST_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        body: action.data.body,
      }
    case FETCH_POST_LIST_SUCCESS:
      // This makes the scroll to comments in PostDetail work
      return {
        ...state,
        pk: null,
      };
    default:
     return state;
  }
}

// Selectors

export const getPostDetailTitle = (state) => state.postDetail.title;
export const getPostDetailBody = (state) => state.postDetail.body;
export const getPostDetailPosterUsername = (state) => state.postDetail.poster;
export const getPostDetailPk = (state) => state.postDetail.pk;
export const getPostDetailLoading = (state) => state.postDetail.loading;



export default postDetail;
