import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  API_SEARCH,
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS_VIEW
} from "../actionTypes";

import { searchApi } from "../../api/Search";
import { getAuthUserToken } from "../../reducers/userAuth";

// If authenticated we can access the previous votes to make
// the arrow change colors
export const makeSearchRequest = q => (dispatch, getState) =>
  dispatch({
    type: API_SEARCH,
    types: {
      request: SEARCH_REQUEST,
      success: SEARCH_SUCCESS,
      failure: SEARCH_FAILURE
    },
    callAPI: () => searchApi(q, getAuthUserToken(getState()))
  });

export const setSearchQuery = q => ({
  type: SET_SEARCH_QUERY,
  query: q
});

export const setSearchResultsView = (viewName = "posts") => ({
  type: SET_SEARCH_RESULTS_VIEW,
  viewName
});
