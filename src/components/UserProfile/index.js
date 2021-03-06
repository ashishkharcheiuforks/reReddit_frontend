import React, { Component } from "react";
import PropTypes from "prop-types";

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
      allCommentPosts,
      username,
      cakeDay,
      karma,
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
                allCommentPosts,
                error,
                loading,
                emptyListMessage
              }}
              showNextPageLoader={false}
              view={profileView}
            />
          </div>
          <div className="user-profile-sidebar-container">
            <UserProfileSidebar
              {...{
                username,
                cakeDay,
                karma
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  allPosts: PropTypes.arrayOf(PropTypes.number),
  allCommentPosts: PropTypes.arrayOf(PropTypes.number),
  username: PropTypes.string,
  cakeDay: PropTypes.string,
  karma: PropTypes.number,
  profileView: PropTypes.string,
  changeProfileView: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool
};

export default UserProfile;
