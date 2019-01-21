import React, { Component } from "react";
import { connect } from "react-redux";

import CreatePost from "../../components/CreatePost";
import { makeCreatePostRequest } from "../../actions/Posts";
import { showUserAuthModal } from "../../actions/UserAuthModal";
import {
  getCreatePostError,
  getCreatePostLoading
} from "../../reducers/createPost";
import { getSubredditTitle } from "../../reducers/subreddit";
import { getAuthUsername } from "../../reducers/userAuth";

class CreatePostContainer extends Component {
  render() {
    return <CreatePost {...this.props} />;
  }
}

const mapStateToProps = state => ({
  errorMessage: getCreatePostError(state),
  loading: getCreatePostLoading(state),
  subredditTitle: getSubredditTitle(state),
  authorizedUsername: getAuthUsername(state)
});

const mapDispatchToProps = dispatch => ({
  handleCreatePost: (title, body, subredditTitle) =>
    dispatch(makeCreatePostRequest(title, body, subredditTitle)),
  showLoginModal: () => dispatch(showUserAuthModal("login"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostContainer);
