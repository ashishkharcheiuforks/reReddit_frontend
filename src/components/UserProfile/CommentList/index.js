import React from "react";
import PropTypes from "prop-types";

import UserProfileCommentPanelContainer from "../../../containers/UserProfileCommentPanelContainer";
import { PanelListLoader } from "../../Loaders";
import EmptyPostList from "../../PostList/EmptyPostList";

const CommentList = props => {
  const { allCommentPosts, loading } = props;

  const emptyListMessage = "This user has got nothing to say!";

  let commentList;
  if (loading) {
    commentList = <PanelListLoader panelNumber={12} />;
  } else if (allCommentPosts.length === 0) {
    commentList = <EmptyPostList message={emptyListMessage} />;
  } else {
    commentList = allCommentPosts.map(postPk => (
      <UserProfileCommentPanelContainer postPk={postPk} key={postPk} />
    ));
  }

  return <>{commentList}</>;
};

CommentList.propTypes = {
  allCommentPosts: PropTypes.arrayOf(PropTypes.number),
  loading: PropTypes.bool
};

export default CommentList;
