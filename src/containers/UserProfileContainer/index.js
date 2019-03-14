import React, { Component } from "react";
import { connect } from "react-redux";

import UserProfile from "../../components/UserProfile";
import {
  makeUserProfileRequest,
  setUserProfileView
} from "../../actions/UserProfile";
import {
  getUserProfileAllCommentPosts,
  getUserProfileLoading,
  getUserProfileError,
  getUserProfileView,
  getUserProfileData
} from "../../reducers/userProfile";
import { getAllPosts } from "../../reducers/postList";

class UserProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchUserProfile(this.props.match.params.username);
  }

  componentDidUpdate(prevProps) {
    // if only the username prop changes this component won't
    // be remounted so update it
    if (this.props.match.params.username !== prevProps.match.params.username) {
      this.props.fetchUserProfile(this.props.match.params.username);
    }
  }

  render() {
    const {
      allPosts,
      allCommentPosts,
      error,
      loading,
      profileView,
      changeProfileView,
      match: {
        params: { username }
      },
      userData: { cakeDay, karma }
    } = this.props;

    return (
      <UserProfile
        {...{
          allPosts,
          allCommentPosts,
          username,
          error,
          loading,
          profileView,
          changeProfileView,
          cakeDay,
          karma
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  allPosts: getAllPosts(state),
  allCommentPosts: getUserProfileAllCommentPosts(state),
  userData: getUserProfileData(state),
  profileView: getUserProfileView(state),
  loading: getUserProfileLoading(state),
  error: getUserProfileError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: username => dispatch(makeUserProfileRequest(username)),
  changeProfileView: view => dispatch(setUserProfileView(view))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
