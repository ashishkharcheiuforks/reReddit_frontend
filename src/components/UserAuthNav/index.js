import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";

import { CREATE_POST_URL, CREATE_SUBREDDIT_URL } from "../../urls";
import UnauthenticatedUser from "./UnauthenticatedUser";
import AuthenticatedUser from "./AuthenticatedUser";
import MobileUserAuthNav from "./Mobile/MobileUserAuthNav";

class UserAuthNav extends Component {
  constructor(props) {
    super(props);

    this.redirectToCreatePost = this.redirectToCreatePost.bind(this);
    this.redirectToCreateSubreddit = this.redirectToCreateSubreddit.bind(this);
  }

  redirectToCreatePost() {
    debugger;
    return this.props.history.push(CREATE_POST_URL(this.props.subredditTitle));
  }

  redirectToCreateSubreddit() {
    return this.props.history.push(CREATE_SUBREDDIT_URL);
  }

  render() {
    const { showModal, authUsername, handleLogout } = this.props;

    const largeScreenComponent = (
      <div id="full-user-auth-dropdown-container">
        {authUsername ? (
          <AuthenticatedUser
            username={authUsername}
            handleLogout={handleLogout}
            redirectToCreatePost={this.redirectToCreatePost}
            redirectToCreateSubreddit={this.redirectToCreateSubreddit}
          />
        ) : (
          <UnauthenticatedUser showModal={showModal} />
        )}
      </div>
    );

    return (
      <Fragment>
        <MobileUserAuthNav
          {...{
            showModal,
            authUsername,
            handleLogout
          }}
          redirectToCreatePost={this.redirectToCreatePost}
          redirectToCreateSubreddit={this.redirectToCreateSubreddit}
        />
        {largeScreenComponent}
      </Fragment>
    );
  }
}

export default withRouter(UserAuthNav);
