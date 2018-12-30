import React from 'react';
import {connect} from 'react-redux';

import PostPanel from '../../components/PostPanel';
import { getPostById } from '../../reducers/postList';
import { getAuthUsername } from '../../reducers/userAuth';
import { makeDeletePostRequest } from '../../actions/Posts'

const PostPanelContainer = (props) => {
  const {post, handleDeletePost, authUsername} = props;
  
  const {
    upvotes,
    pk,
    title,
    subreddit_title: subredditTitle,
    poster_username: posterUsername,
    created,
    voteDisplayState,
  } = post;
  
  return (
    <PostPanel
      {...{
        upvotes,
        pk,
        title,
        subredditTitle,
        posterUsername,
        authUsername,
        created,
        voteDisplayState,
        handleDeletePost,
      }}
    />
  );
}

const mapStateToProps = (state, ownProps) => ({
    post: getPostById(state, ownProps.postPk),
    authUsername: getAuthUsername(state),
  })

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDeletePost: () => dispatch(makeDeletePostRequest(ownProps.postPk)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPanelContainer);
