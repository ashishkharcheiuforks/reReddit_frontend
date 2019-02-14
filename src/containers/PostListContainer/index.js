import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { makeSubPostListRequest } from "../../actions/Posts";
import PostList from "../../components/PostList";
import {
  getPostListError,
  getPostListLoading,
  getAllPosts
} from "../../reducers/postList";
import { getAuthUsername } from "../../reducers/userAuth";
import { getCurrentSortOption } from "../../reducers/sortBy";

class PostListContainer extends Component {
  componentDidMount() {
    // If empty then we should show the home subreddit
    // We need to grab the subredditTitle from the router because
    // the version in the redux store has not yet been set.
    // That is to say that when this is constructed and rendered
    // the subreddit api call may not be back yet and the
    // subreddit component componentDidMount function has
    // certainly not been called.
    this.props.fetchPostList(
      this.props.match.params.subredditTitle || "home",
      this.props.currentSortOption
    );
  }

  componentDidUpdate(prevProps) {
    // When switching between subreddits this component will not be remounted
    // Don't waste time reloading if we are on the same subreddit, but do
    // if the subreddit title changes.
    // Also if a user logs in or out we need to update the info as well.
    // Also if the sorting option changes we will need to refetch
    if (
      this.props.match.params.subredditTitle !==
        prevProps.match.params.subredditTitle ||
      this.props.authUsername !== prevProps.authUsername ||
      this.props.currentSortOption !== prevProps.currentSortOption
    ) {
      this.props.fetchPostList(
        this.props.match.params.subredditTitle || "home",
        this.props.currentSortOption
      );
    }
  }

  render() {
    let emptyListMessage = undefined;
    const subredditTitle = this.props.match.params.subredditTitle || "home";

    if (subredditTitle.toLowerCase() === "home") {
      emptyListMessage = `
        There are no posts to display because
        you have not subscribed to any subreddits yet!
      `;
    }

    return <PostList {...this.props} emptyListMessage={emptyListMessage} />;
  }
}

const mapStateToProps = state => ({
  loading: getPostListLoading(state),
  error: getPostListError(state),
  allPosts: getAllPosts(state),
  authUsername: getAuthUsername(state),
  currentSortOption: getCurrentSortOption(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPostList: (subredditTitle, orderBy) =>
    dispatch(makeSubPostListRequest(subredditTitle, orderBy))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostListContainer)
);
