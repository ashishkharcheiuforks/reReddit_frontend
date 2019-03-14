import React from "react";
import { connect } from "react-redux";

import UserProfileCommentPanel from "../../components/UserProfile/UserProfileCommentPanel";
import {
  getUserProfileCommentsByPostId,
  getUserProfileCommentPostById
} from "../../reducers/userProfile";

const UserProfileCommentPanelContainer = props => {
  const { commentList, postInfo } = props;
  return <UserProfileCommentPanel {...{ commentList, postInfo }} />;
};

const mapStateToProps = (state, ownProps) => ({
  commentList: getUserProfileCommentsByPostId(state, ownProps.postPk),
  postInfo: getUserProfileCommentPostById(state, ownProps.postPk)
});

export default connect(mapStateToProps)(UserProfileCommentPanelContainer);
