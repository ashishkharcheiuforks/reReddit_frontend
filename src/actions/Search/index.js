import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  API_SEARCH,
} from '../actionTypes';

import {
  searchApi,
} from '../../api/Search';


export const makeSearchRequest = (q) => {
  return ({
    type: API_SEARCH,
    types: {
      request: (dispatch) => dispatch({type: SEARCH_REQUEST, query: q}),
      success: SEARCH_SUCCESS,
      failure: SEARCH_FAILURE,
    },
    callAPI: () => searchApi(q),
  });
};
