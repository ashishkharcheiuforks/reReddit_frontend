import React from "react";
import { connect } from "react-redux";

import UserProfileCommentPanel from "../../components/UserProfile/UserProfileCommentPanel";
import { getCommentListFromIdList } from "../../reducers/userProfile";

const UserProfileCommentPanelContainer = props => {
  return <UserProfileCommentPanel />;
};

const mapStateToProps = (state, ownProps) => ({
  //commentList: getCommentListFromIdList(state, ownProps.commentIds),
});

export default connect(mapStateToProps)(UserProfileCommentPanelContainer);
