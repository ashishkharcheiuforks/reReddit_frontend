import React, { Component } from "react";
import { connect } from "react-redux";

import UserProfile from "../../components/UserProfile";
import { makeUserProfileRequest } from "../../actions/UserProfile";
import {
  getUserProfileAllPosts,
  getUserProfileAllComments,
  getUserProfileLoading,
  getUserProfileError,
  getUserProfileView
} from "../../reducers/userProfile";

class UserProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchUserProfile(this.props.match.params.username);
  }

  componentDidUpdate(prevProps) {
    // if the username prop changes this component won't be remounted
    if (this.props.match.params.username !== prevProps.match.params.username) {
      this.props.fetchUserProfile(this.props.match.params.username);
    }
  }

  render() {
    const {
      allComments,
      allPosts,
      error,
      loading,
      profileView,
      match: {
        params: { username }
      }
    } = this.props;

    return (
      <UserProfile
        {...{
          allComments,
          allPosts,
          username,
          error,
          loading,
          profileView,
          username
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  allComments: getUserProfileAllComments(state),
  allPosts: getUserProfileAllPosts(state),
  profileView: getUserProfileView(state),
  loading: getUserProfileLoading(state),
  error: getUserProfileError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: username => dispatch(makeUserProfileRequest(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
