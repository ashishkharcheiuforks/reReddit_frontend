import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { makeSubPostListRequest } from "../../actions/Posts";
import PostList from "../../components/PostList";

class PostListContainer extends Component {
  componentDidMount() {
    // If undefined converts to null
    const subredditTitle = this.props.match.params.subredditTitle || "home";

    this.props.fetchPostList(subredditTitle, "new");
  }

  componentDidUpdate(prevProps) {
    // If undefined converts to null
    const subredditTitle = this.props.match.params.subredditTitle || "home";

    if (
      this.props.match.params.subredditTitle !==
      prevProps.match.params.subredditTitle
    ) {
      this.props.fetchPostList(subredditTitle, "new");
    }
  }

  render() {
    return <PostList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  loading: state.postList.loading,
  error: state.postList.error,
  allPosts: state.postList.allPosts
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
