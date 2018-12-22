import React from 'react';
import {connect} from 'react-redux';

import PostPanel from '../../components/PostPanel';
import { getPostById } from '../../reducers/postList';

const PostPanelContainer = ({post}) => {
  const {
    upvotes,
    pk,
    title,
    subreddit_title,
    poster_username,
    created,
    voteDisplayState,
  } = post
  
  return (
    <PostPanel
      {...{
        upvotes,
        pk,
        title,
        subreddit_title,
        poster_username,
        created,
        voteDisplayState,
      }}
    />
  );
}

const mapStateToProps = (state, ownProps) => (
  {
    post: getPostById(state, ownProps.postPk),
  }
)

export default connect(
  mapStateToProps,
)(PostPanelContainer);
