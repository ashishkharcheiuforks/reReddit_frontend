import { combineReducers } from "redux";

import subreddit from "./subreddit";
import userAuth from "./userAuth";
import userAuthModal from "./userAuthModal";
import postDetail from "./postDetail";
import comments from "./comments";
import postList from "./postList";
import createPost from "./createPost";
import createSubreddit from "./createSubreddit";
import editPost from "./editPost";
import search from "./search";
import userProfile from "./userProfile";

const rootReducer = combineReducers({
  subreddit,
  userAuth,
  userAuthModal,
  postDetail,
  comments,
  postList,
  createPost,
  createSubreddit,
  editPost,
  search,
  userProfile
});

export default rootReducer;
