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
import getSubredditTitle from "../../reducers/subreddit";

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
      "new"
    );
  }

  componentDidUpdate(prevProps) {
    // When switching between subreddits this component will not be remounted
    if (
      this.props.match.params.subredditTitle !==
      prevProps.match.params.subredditTitle
    ) {
      this.props.fetchPostList(
        this.props.match.params.subredditTitle || "home",
        "new"
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
  allPosts: getAllPosts(state)
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
