import {
  FETCH_POST_DETAIL_REQUEST,
  FETCH_POST_DETAIL_SUCCESS,
  FETCH_POST_DETAIL_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  title: null,
  body: null,
  poster: null,
  pk: null,
  error: null,
}

const postDetail = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_POST_DETAIL_SUCCESS:
      return {
        title: action.data.title,
        body: action.data.body,
        poster: action.data.poster_username,
        pk: action.data.pk,
        error: null,
      }
    case FETCH_POST_DETAIL_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
     return state;
  }
}

// Selectors

export const getPostDetailTitle = (state) => state.postDetail.title;
export const getPostDetailBody = (state) => state.postDetail.body;
export const getPostDetailPosterUsername = (state) => state.postDetail.poster;
export const getPostDetailPk = (state) => state.postDetail.pk;


export default postDetail;
