import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import PostPanelContainer from "../../containers/PostPanelContainer";
import { ErrorAlert } from "../AlertMessage";
import { PanelListLoader } from "../Loaders";
import EmptyPostList from "./EmptyPostList";
import "./styles.css";

const PostList = props => {
  const { loading, error, allPosts, emptyListMessage = undefined } = props;

  if (error) {
    return <ErrorAlert>{error}</ErrorAlert>;
  }

  let postList;
  if (loading) {
    postList = <PanelListLoader panelNumber={8} />;
  } else if (allPosts.length === 0) {
    postList = <EmptyPostList message={emptyListMessage} />;
  } else {
    const postPanels = allPosts.map(postPk => {
      return <PostPanelContainer postPk={postPk} key={postPk} />;
    });
    postList = <ul>{postPanels}</ul>;
  }

  return <div className="postlist-content">{postList}</div>;
};

PostList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  allPosts: PropTypes.arrayOf(PropTypes.number)
};

export default withRouter(PostList);
