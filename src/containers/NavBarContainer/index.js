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
  const { userSubreddits } = props;

  return (
    <NavBar
      {...{
        userSubreddits
      }}
    />
  );
};

const mapStateToProps = state => ({
  userSubreddits: getAuthUserSubreddits(state)
});

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(NavBarContainer);
