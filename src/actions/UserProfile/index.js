import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  API_USER_PROFILE,
  SET_USER_PROFILE_VIEW
} from "../actionTypes";

import { getUserProfileApi } from "../../api/UserProfile";
import { getAuthUserToken } from "../../reducers/userAuth";

export const makeUserProfileRequest = username => (dispatch, getState) =>
  dispatch({
    type: API_USER_PROFILE,
    types: {
      request: FETCH_USER_PROFILE_REQUEST,
      success: FETCH_USER_PROFILE_SUCCESS,
      failure: FETCH_USER_PROFILE_FAILURE
    },
    callAPI: () => getUserProfileApi(username, getAuthUserToken(getState()))
  });

export const setUserProfileView = (viewName = "posts") => ({
  type: SET_USER_PROFILE_VIEW,
  viewName
});
