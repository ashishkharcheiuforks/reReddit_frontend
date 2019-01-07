import React from 'react';
import {connect} from 'react-redux';

import PostPanel from '../../components/PostPanel';
import { getPostById } from '../../reducers/postList';
import { getAuthUsername } from '../../reducers/userAuth';
import { getSearchPostById } from '../../reducers/search';
import { makeDeletePostRequest } from '../../actions/Posts';

const PostPanelContainer = (props) => {
  const {post, handleDeletePost, authUsername} = props;
  
  const {
    upvotes,
    pk,
    title,
    subredditTitle,
    posterUsername,
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

const mapStateToProps = (state, { postPk, }) => ({
    post: getPostById(state, postPk) || getSearchPostById(state, postPk),
    authUsername: getAuthUsername(state),
  })

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDeletePost: () => dispatch(makeDeletePostRequest(ownProps.postPk)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPanelContainer);
