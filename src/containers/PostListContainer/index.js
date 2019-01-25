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
  constructor(props) {
    super(props);

    // If empty then we should show the home subreddit
    // We need to grab the subredditTitle from the router because
    // the version in the redux store has not yet been set.
    // That is to say that when this is constructed and rendered
    // the subreddit api call may not be back yet and the
    // subreddit component componentDidMount function has
    // certainly not been called.
    this.state = {
      subredditTitle: props.match.params.subredditTitle || "home"
    };
  }
  componentDidMount() {
    this.props.fetchPostList(this.state.subredditTitle, "new");
  }

  componentDidUpdate(prevProps) {
    // When switching between subreddits this component will not be remounted

    if (
      this.props.match.params.subredditTitle !==
      prevProps.match.params.subredditTitle
    ) {
      this.setState({
        subredditTitle: this.props.match.params.subredditTitle || "home"
      });
      this.props.fetchPostList(this.state.subredditTitle, "new");
    }
  }

  render() {
    let emptyListMessage = undefined;

    if (this.state.subredditTitle.toLowerCase() === "home") {
      emptyListMessage = "You have not subscribed to any subreddit yet!";
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
