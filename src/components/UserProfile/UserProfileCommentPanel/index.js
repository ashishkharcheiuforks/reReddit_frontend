import React from "react";
import PropTypes from "prop-types";

const UserProfileCommentPanel = props => {
  const { commentList, postInfo } = props;

  const comments = commentList.map(comment => (
    <div className="up-comment-panel">{comment.body}</div>
  ));

  return (
    <div className="up-comment-post-panel">
      <div className="up-post-panel">{postInfo.title}</div>
      {comments}
    </div>
  );
};

export default UserProfileCommentPanel;
