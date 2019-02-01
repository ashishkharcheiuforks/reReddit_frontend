import React, { Component } from "react";

import PostList from "../PostList";
import { withEither } from "../../utilities/HOC";

class UserProfile extends Component {
  render() {
    const { allPosts, allComments, username, error, loading } = this.props;

    const ConditionalList = withEither(
      props => props.view === "posts",
      PostList
    )(() => null);

    return (
      <div className="user-profile-container">
        <div id="user-profile-navbar" />

        <div className="user-profile-main-content">
          <div className="user-profile-list">
            <ConditionalList
              {...{ allPosts, error, loading }}
              view={this.state.view}
            />
          </div>
          <div className="user-profile-sidebars" />
        </div>
      </div>
    );
  }
}

export default UserProfile;
