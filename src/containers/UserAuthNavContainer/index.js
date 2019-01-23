import React from "react";
import { connect } from "react-redux";

import UserAuthNav from "../../components/UserAuthNav";
import { userAuthLogout } from "../../actions/UserAuth";
import { showUserAuthModal } from "../../actions/UserAuthModal";
import { getAuthUsername } from "../../reducers/userAuth";
import { getSubredditTitle } from "../../reducers/subreddit";

const UserAuthNavContainer = props => {
  const { authUsername, handleLogout, showModal, subredditTitle } = props;

  return (
    <UserAuthNav
      {...{
        authUsername,
        handleLogout,
        showModal,
        subredditTitle
      }}
    />
  );
};

const mapStateToProps = state => ({
  authUsername: getAuthUsername(state),
  subredditTitle: getSubredditTitle(state)
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(userAuthLogout()),
  showModal: displayType => dispatch(showUserAuthModal(displayType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuthNavContainer);
