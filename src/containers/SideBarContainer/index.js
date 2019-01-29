import React from "react";
import { connect } from "react-redux";

import SideBar from "../../components/SideBar";
import { getSubredditData } from "../../reducers/subreddit";
import { getAuthUsername } from "../../reducers/userAuth";
import { showUserAuthModal } from "../../actions/UserAuthModal";

const SideBarContainer = props => {
  const {
    subredditData: { title: subredditTitle, description, loading, pseudo },
    showUserAuthRegisterModal,
    authenticatedUsername
  } = props;

  return (
    <SideBar
      {...{
        subredditTitle,
        description,
        loading,
        showUserAuthRegisterModal,
        authenticatedUsername,
        pseudo
      }}
    />
  );
};

const mapStateToProps = state => ({
  subredditData: getSubredditData(state),
  authenticatedUsername: getAuthUsername(state)
});

const mapDispatchToProps = dispatch => ({
  showUserAuthRegisterModal: () => dispatch(showUserAuthModal("register"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
