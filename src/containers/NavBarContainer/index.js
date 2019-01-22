import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../../components/NavBar";
import { showUserAuthModal } from "../../actions/UserAuthModal";
import { userAuthLogout } from "../../actions/UserAuth";
import {
  getAuthUserSubreddits,
  getAuthUsername
} from "../../reducers/userAuth";

const NavBarContainer = props => {
  const { userSubreddits, showModal, authUsername, handleLogout } = props;

  return (
    <NavBar
      {...{
        userSubreddits,
        showModal,
        authUsername,
        handleLogout
      }}
    />
  );
};

const mapStateToProps = state => ({
  authUsername: getAuthUsername(state),
  userSubreddits: getAuthUserSubreddits(state)
});

const mapDispatchToProps = dispatch => ({
  showModal: displayType => dispatch(showUserAuthModal(displayType)),
  handleLogout: () => dispatch(userAuthLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(NavBarContainer);
