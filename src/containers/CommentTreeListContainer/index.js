import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import {
  makeCommentTreeRequest,
  makeCreateCommentRequest
} from "../../actions/Comments";
import CommentTreeList from "../../components/CommentTreeList";
import {
  getRootCommentPks,
  getCommentsLoading,
  getCommentsError,
  getCreateCommentError,
  getCreateCommentLoading
} from "../../reducers/comments";
import { getPostDetailPk } from "../../reducers/postDetail";
import { getAuthUsername } from "../../reducers/userAuth";

class CommentTreeListContainer extends Component {
  componentDidMount() {
    this.props.fetchCommentList(this.props.match.params.postId);
  }

  componentDidUpdate(prevProps) {
    // If we logged in/out need to update the comment list
    if (this.props.authUsername !== prevProps.authUsername) {
      this.props.fetchCommentList(this.props.match.params.postId);
    }
  }

  render() {
    return <CommentTreeList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  loading: getCommentsLoading(state),
  rootCommentPks: getRootCommentPks(state),
  error: getCommentsError(state),
  createCommentError: getCreateCommentError(state),
  createCommentLoading: getCreateCommentLoading(state),
  postPk: getPostDetailPk(state),
  authUsername: getAuthUsername(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCommentList: postId => dispatch(makeCommentTreeRequest(postId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentTreeListContainer)
);
