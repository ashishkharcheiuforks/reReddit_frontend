import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import PostPanel from "../../components/PostPanel";
import { getPostById } from "../../reducers/postList";
import { getAuthUsername } from "../../reducers/userAuth";
import { makeDeletePostRequest, togglePostEditor } from "../../actions/Posts";
import { getPostEditorShowState } from "../../reducers/editPost";

const PostPanelContainer = props => {
  const {
    post,
    handleDeletePost,
    authUsername,
    usage,
    showPostEditor,
    togglePostEditor
  } = props;
  const {
    upvotes,
    pk,
    title,
    subredditTitle,
    posterUsername,
    created,
    voteDisplayState
  } = post;

  return (
    <PostPanel
      {...{
        upvotes,
        pk,
        title,
        subredditTitle,
        posterUsername,
        authUsername,
        created,
        voteDisplayState,
        handleDeletePost,
        showPostEditor,
        togglePostEditor
      }}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const { postPk, usage } = ownProps;

  return {
    post: getPostById(state, postPk),
    authUsername: getAuthUsername(state),
    showPostEditor: getPostEditorShowState(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDeletePost: () => dispatch(makeDeletePostRequest(ownProps.postPk)),
  togglePostEditor: () => dispatch(togglePostEditor())
});

PostPanelContainer.propTypes = {
  post: PropTypes.shape({
    upvotes: PropTypes.number,
    pk: PropTypes.number,
    title: PropTypes.string,
    subredditTitle: PropTypes.string,
    posterUsername: PropTypes.string,
    created: PropTypes.string,
    voteDisplayState: PropTypes.oneOf([0, -1, 1])
  }),
  handleDeletePost: PropTypes.func,
  authUsername: PropTypes.string,
  usage: PropTypes.oneOf(["subreddit", "search"])
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPanelContainer);
