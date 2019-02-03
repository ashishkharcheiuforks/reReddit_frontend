import React, { Component } from "react";
import { connect } from "react-redux";

import CreatePost from "../../components/CreatePost";
import {
  makeCreatePostRequest,
  clearCreatePostError
} from "../../actions/Posts";
import { showUserAuthModal } from "../../actions/UserAuthModal";
import {
  getCreatePostError,
  getCreatePostLoading
} from "../../reducers/createPost";
import { getSubredditData } from "../../reducers/subreddit";
import {
  getAuthUsername,
  getAuthUserSubredditTitles
} from "../../reducers/userAuth";

class CreatePostContainer extends Component {
  componentWillUnmount() {
    this.props.clearError();
  }

  render() {
    const {
      subredditData: { title: subredditTitle, pseudo: pseudoSubreddit },
      ...rest
    } = this.props;

    return <CreatePost {...{ subredditTitle, pseudoSubreddit, ...rest }} />;
  }
}

const mapStateToProps = state => ({
  errorMessage: getCreatePostError(state),
  loading: getCreatePostLoading(state),
  authorizedUsername: getAuthUsername(state),
  authUserSubredditTitles: getAuthUserSubredditTitles(state),
  subredditData: getSubredditData(state)
});

const mapDispatchToProps = dispatch => ({
  handleCreatePost: (title, body, subredditTitle) =>
    dispatch(makeCreatePostRequest(title, body, subredditTitle)),
  showLoginModal: () => dispatch(showUserAuthModal("login")),
  clearError: () => dispatch(clearCreatePostError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostContainer);
