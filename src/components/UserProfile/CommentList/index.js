import React from "react";
import PropTypes from "prop-types";

import EmptyPostList from "../../PostList/EmptyPostList";

const CommentList = props => {
  const message = "Coming Soon!";
  return <EmptyPostList message={message} />;
};

export default CommentList;
