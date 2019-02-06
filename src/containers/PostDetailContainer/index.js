import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import PostDetail from "../../components/PostDetail";
import {
  makePostDetailRequest,
  makeDeletePostRequest,
  togglePostEditor
} from "../../actions/Posts";
import { getPostDetailData } from "../../reducers/postDetail";
import { getAuthUsername } from "../../reducers/userAuth";
import {
  getPostEditorShowState,
  getEditPostError
} from "../../reducers/editPost";

class PostDetailContainer extends Component {
  componentDidMount() {
    const postId = this.props.match.params.postId || null;
    this.props.fetchPostDetail(postId);
  }

  componentWillUnmount() {
    if (this.props.showPostEditor) {
      this.props.togglePostEditor();
    }
  }

  render() {
    const {
      postDetailData: {
        body,
        title,
        posterUsername,
        pk,
        loading,
        voteDisplayState,
        upvotes
      },
      subredditTitle,
      authUsername,
      showPostEditor,
      editPostError,
      commentScroll,
      handleDeletePost,
      togglePostEditor
    } = this.props;

    return (
      <PostDetail
        {...{
          body,
          title,
          subredditTitle,
          posterUsername,
          voteDisplayState,
          upvotes,
          authUsername,
          pk,
          loading,
          showPostEditor,
          editPostError,
          commentScroll,
          handleDeletePost,
          togglePostEditor
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  postDetailData: getPostDetailData(state),
  subredditTitle: ownProps.title,
  showPostEditor: getPostEditorShowState(state),
  editPostError: getEditPostError(state),
  authUsername: getAuthUsername(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPostDetail: postId => dispatch(makePostDetailRequest(postId)),
  handleDeletePost: () =>
    dispatch(makeDeletePostRequest(Number(ownProps.match.params.postId))),
  togglePostEditor: () => dispatch(togglePostEditor())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostDetailContainer)
);
