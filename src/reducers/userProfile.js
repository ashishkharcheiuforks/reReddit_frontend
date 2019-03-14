import dateFnsFormat from "date-fns/format";

import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  SET_USER_PROFILE_VIEW
} from "../actions/actionTypes";
import { allIds } from "../utilities/reducerUtils";

const initialState = {
  loading: false,
  error: null,
  username: null,
  commentsById: {},
  commentIdsByPostId: {},
  commentPostsById: {},
  allCommentPosts: [],
  allComments: [],
  karma: 0,
  cakeDay: null,
  profileView: "posts"
};

// The comments will be grouped by posts on the profile page
// Here map a post id to a list of associated comment ids
const setCommentIdsByPostId = commentsById => {
  const commentIdsByPostId = {};

  Object.entries(commentsById).forEach(entry => {
    if (commentIdsByPostId[entry[1].post] === undefined) {
      commentIdsByPostId[entry[1].post] = [parseInt(entry[0])];
    } else {
      commentIdsByPostId[entry[1].post].push(parseInt(entry[0]));
    }
  });
  return commentIdsByPostId;
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        username: action.data.username,
        karma: action.data.karma,
        cakeDay: dateFnsFormat(action.data.cake_day, "MMMM Do"),
        commentsById: action.data.normalizedCommentData.entities.comments,
        commentIdsByPostId: setCommentIdsByPostId(
          action.data.normalizedCommentData.entities.comments
        ),
        allComments: action.data.normalizedCommentData.results,
        allCommentPosts: allIds(
          Object.values(action.data.normalizedCommentData.entities.posts)
        ),
        commentPostsById: action.data.normalizedCommentData.entities.posts,
        loading: false,
        error: null
      };
    case FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case SET_USER_PROFILE_VIEW:
      return {
        ...state,
        profileView: action.viewName
      };
    default:
      return state;
  }
};

export const getUserProfileAllComments = state => state.userProfile.allComments;
export const getUserProfileAllCommentPosts = state =>
  state.userProfile.allCommentPosts;
export const getUserProfileCommentPostById = (state, id) =>
  state.userProfile.commentPostsById[id];
export const getUserProfileCommentsByPostId = (state, postPk) =>
  state.userProfile.commentIdsByPostId[postPk].map(
    commentPk => state.userProfile.commentsById[commentPk]
  );
export const getUserProfileCommentById = (state, pk) =>
  state.userProfile.commentsById[pk];
export const getUserProfileUsername = state => state.userProfile.username;
export const getUserProfileData = state => ({
  username: state.userProfile.username,
  karma: state.userProfile.karma,
  cakeDay: state.userProfile.cakeDay
});
export const getUserProfileLoading = state => state.userProfile.loading;
export const getUserProfileError = state => state.userProfile.error;
export const getUserProfileView = state => state.userProfile.profileView;

export default userProfile;
