import React from 'react';
import { connect } from 'react-redux';

import Comment from '../../components/Comment';
import { getCommentById, getPosterByCommentId } from '../../reducers/comments';

const CommentContainer = (props) => {
  
  const { commentData, posterData, pk } = props;
  const {
    children: childrenPk,
    body,
    upvotes,
    created,
    vote_state: voteDisplayState,
  } = commentData;
  const { username: posterUsername, }  = posterData
  return (
    <Comment
      {...{
        childrenPk,
        body,
        upvotes,
        created,
        pk,
        voteDisplayState,
        posterUsername
        }}
    />
  )
}

const mapStateToProps = (state, ownProps) => (
  {
      commentData: getCommentById(state, ownProps.pk),
      posterData: getPosterByCommentId(state, ownProps.pk),
  }
)

export default connect(
  mapStateToProps,
)(CommentContainer);
