import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  SET_USER_PROFILE_VIEW
} from "../actions/actionTypes";
import { objectById, allIds } from "../utilities/reducerUtils";

const initialState = {
  loading: false,
  error: null,
  username: null,
  commentsById: {},
  commentsByPostId: {},
  postsById: {},
  allComments: [],
  allPosts: [],
  profileView: "posts"
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_PROFILE_REQUEST":
      return {
        ...state,
        error: null,
        loading: true
      };
    case "FETCH_USER_PROFILE_SUCCESS":
      return {
        ...state,
        username: action.data.username,
        commentsById: objectById(action.data.comments),
        postsById: objectById(action.data.posts),
        allComments: allIds(action.data.comments),
        allPosts: allIds(action.data.posts),
        loading: false,
        error: null
      };
    case "FETCH_USER_PROFILE_FAILURE":
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case "SET_USER_PROFILE_VIEW":
      return {
        ...state,
        profileView: action.viewName
      };
    default:
      return state;
  }
};

export const getUserProfileAllComments = state => state.userProfile.allComments;
export const getUserProfileAllPosts = state => state.userProfile.allPosts;
export const getUserProfileCommentById = (state, pk) =>
  state.userProfile.commentsById[pk];
export const getUserProfilePostById = (state, pk) =>
  state.userProfile.postsById[pk];
export const getUserProfileUsername = state => state.userProfile.username;
export const getUserProfileLoading = state => state.userProfile.loading;
export const getUserProfileError = state => state.userProfile.error;
export const getUserProfileView = state => state.userProfile.profileView;

export default userProfile;
