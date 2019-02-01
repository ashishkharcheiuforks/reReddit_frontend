import React, { Component } from "react";

import PostList from "../PostList";
import { withEither } from "../../utilities/HOC";
import { NavSelectorButton } from "../Buttons";

import "./styles.css";

class UserProfile extends Component {
  render() {
    const {
      allPosts,
      allComments,
      username,
      profileView,
      error,
      loading
    } = this.props;

    const ConditionalList = withEither(
      props => props.view === "posts",
      PostList
    )(() => null);

    return (
      <div className="user-profile-container">
        <div id="user-profile-navbar">
          <div id="up-nav-selector-buttons">
            <NavSelectorButton color="black">posts</NavSelectorButton>
          </div>
        </div>
        <div className="user-profile-main-content">
          <div className="user-profile-list">
            <ConditionalList
              {...{ allPosts, error, loading }}
              view={profileView}
            />
          </div>
          <div className="user-profile-sidebars" />
        </div>
      </div>
    );
  }
}

export default UserProfile;
