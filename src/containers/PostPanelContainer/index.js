import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import PostPanel from '../../components/PostPanel';
import { getPostById } from '../../reducers/postList';
import { getAuthUsername } from '../../reducers/userAuth';
import { getSearchPostById } from '../../reducers/search';
import { makeDeletePostRequest } from '../../actions/Posts';
import { SEARCH_URL, urlMatch } from '../../urls';

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

const mapStateToProps = (state, ownProps) => {
  const {
    postPk,
    match :{
      url
    },
  } = ownProps;
  
  return ({
      // used for both search and normal subreddit post lists
      post: urlMatch(SEARCH_URL, url)
        ? getSearchPostById(state, postPk)
        : getPostById(state, postPk),
      authUsername: getAuthUsername(state),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDeletePost: () => dispatch(makeDeletePostRequest(ownProps.postPk)),
})

PostPanelContainer.propTypes = {
  upvotes: PropTypes.number,
  pk: PropTypes.number,
  title: PropTypes.string,
  subredditTitle: PropTypes.string,
  posterUsername: PropTypes.string,
  created: PropTypes.string,
  voteDisplayState: PropTypes.oneOf([0,-1,1]),
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPanelContainer));
