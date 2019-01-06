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
      request: SEARCH_REQUEST,
      success: SEARCH_SUCCESS,
      failure: SEARCH_FAILURE,
    },
    callAPI: () => searchApi(q),
  });
};
