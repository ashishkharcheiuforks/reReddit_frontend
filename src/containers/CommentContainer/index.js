import React from 'react';
import { connect } from 'react-redux';

import Comment from '../../components/Comment';
import {
  getCommentById,
  getPosterByCommentId, } from '../../reducers/comments';
import { getAuthUsername } from '../../reducers/userAuth';

const CommentContainer = (props) => {
  
  const { commentData, posterData, authUsername, pk } = props;
  const {
    children: childrenPk,
    body,
    upvotes,
    created,
    voteDisplayState,
  } = commentData;
  const posterUsername  = posterData && posterData.username;
  return (
    <Comment
      {...{
        childrenPk,
        body,
        upvotes,
        created,
        pk,
        voteDisplayState,
        posterUsername,
        authUsername,
        }}
    />
  )
}

const mapStateToProps = (state, ownProps) => (
  {
      commentData: getCommentById(state, ownProps.pk),
      posterData: getPosterByCommentId(state, ownProps.pk),
      authUsername: getAuthUsername(state),
  }
)

export default connect(
  mapStateToProps,
)(CommentContainer);
