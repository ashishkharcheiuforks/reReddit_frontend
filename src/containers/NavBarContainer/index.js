import React from "react";
import { connect } from "react-redux";

import NavBar from "../../components/NavBar";
import { getAuthUserSubredditTitles } from "../../reducers/userAuth";

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
  userSubreddits: getAuthUserSubredditTitles(state)
});

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(NavBarContainer);
