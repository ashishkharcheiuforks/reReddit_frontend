import { normalize, schema } from "normalizr";

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
      success: normalizeCommentPostsOnSuccess,
      failure: FETCH_USER_PROFILE_FAILURE
    },
    callAPI: () => getUserProfileApi(username, getAuthUserToken(getState()))
  });

export const setUserProfileView = (viewName = "posts") => ({
  type: SET_USER_PROFILE_VIEW,
  viewName
});

// We need post information for each comment included. Is nested into the
// comment data by the backend. We don't want nested data the redux state
// so normalize the comments and their posts here.
const normalizeCommentPostsOnSuccess = (data, getState, dispatch) => {
  const post = new schema.Entity("posts", {}, { idAttribute: "pk" });
  const comment = new schema.Entity(
    "comments",
    { post: post },
    { idAttribute: "pk" }
  );
  const commentList = new schema.Array(comment);
  const normalizedCommentData = normalize(data.comments, commentList);

  return dispatch({
    type: FETCH_USER_PROFILE_SUCCESS,
    data: { ...data, normalizedCommentData }
  });
};
