import React from "react";
import { connect } from "react-redux";

import UserProfileCommentPanel from "../../components/UserProfile/UserProfileCommentPanel";
import {
  getUserProfileCommentsByPostId,
  getUserProfileCommentPostById,
  getUserProfileUsername
} from "../../reducers/userProfile";

const UserProfileCommentPanelContainer = props => {
  const { commentList, postInfo, username } = props;
  return <UserProfileCommentPanel {...{ commentList, postInfo, username }} />;
};

const mapStateToProps = (state, ownProps) => ({
  commentList: getUserProfileCommentsByPostId(state, ownProps.postPk),
  postInfo: getUserProfileCommentPostById(state, ownProps.postPk),
  username: getUserProfileUsername(state)
});

export default connect(mapStateToProps)(UserProfileCommentPanelContainer);
