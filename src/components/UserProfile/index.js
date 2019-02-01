import React, { Component } from "react";

import PostList from "../PostList";
import CommentList from "./CommentList";
import { withEither } from "../../utilities/HOC";
import { NavSelectorButton } from "../Buttons";
import UserProfileSidebar from "./UserProfileSidebar";

import "./styles.css";

class UserProfile extends Component {
  render() {
    const {
      allPosts,
      allComments,
      username,
      profileView,
      changeProfileView,
      error,
      loading
    } = this.props;

    const ConditionalList = withEither(
      props => props.view === "comments",
      CommentList
    )(PostList);

    const emptyListMessage = `u/${username} does not have any activity to show.`;

    const navSelectorButtonColor = "#070707";

    return (
      <div className="user-profile-container">
        <div id="user-profile-navbar">
          <div id="up-nav-selector-buttons">
            <NavSelectorButton
              color={navSelectorButtonColor}
              onClick={() => changeProfileView("posts")}
              active={profileView === "posts"}
            >
              Posts
            </NavSelectorButton>
            <NavSelectorButton
              color={navSelectorButtonColor}
              onClick={() => changeProfileView("comments")}
              active={profileView === "comments"}
            >
              Comments
            </NavSelectorButton>
          </div>
        </div>
        <div className="user-profile-main-content">
          <div className="user-profile-list">
            <ConditionalList
              {...{
                allPosts,
                error,
                loading,
                emptyListMessage
              }}
              view={profileView}
            />
          </div>
          <div className="user-profile-sidebar-container">
            <UserProfileSidebar
              {...{
                username
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
