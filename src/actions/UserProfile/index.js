import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  API_USER_PROFILE
} from "../actionTypes";

import { getUserProfileApi } from "../../api/UserProfile";
import { getUserAuthToken } from "../../reducers/userAuth";

export const makeUserProfileRequest = username => ({
  type: API_USER_PROFILE,
  types: {
    request: FETCH_USER_PROFILE_REQUEST,
    success: FETCH_USER_PROFILE_SUCCESS,
    failure: FETCH_USER_PROFILE_FAILURE
  },
  callAPI: () => getUserProfileApi(username)
});
