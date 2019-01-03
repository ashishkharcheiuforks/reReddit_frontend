import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostDetail from '../../components/PostDetail';
import {
  makePostDetailRequest,
  makeDeletePostRequest
} from '../../actions/Posts';
import {
  getPostDetailPk,
  getPostDetailBody,
  getPostDetailTitle,
  getPostDetailPosterUsername,
  getPostDetailLoading,
} from '../../reducers/postDetail';
import { getAuthUsername, } from '../../reducers/userAuth';


class PostDetailContainer extends Component {
  componentDidMount() {
    const postId = this.props.match.params.postId || null;
    this.props.fetchPostDetail(postId);
  }
  
  render() {
        
    const {
      body,
      title,
      subredditTitle,
      posterUsername,
      authUsername,
      pk,
      loading,
      commentScroll,
      handleDeletePost,
    } = this.props;
    
    return <PostDetail {...{
        body,
        title,
        subredditTitle,
        posterUsername,
        authUsername,
        pk,
        loading,
        commentScroll,
        handleDeletePost,
      }} />;
  }
}

const mapStateToProps = (state, ownProps) => (
  {
    subredditTitle: ownProps.title,
    body: getPostDetailBody(state),
    title: getPostDetailTitle(state),
    posterUsername: getPostDetailPosterUsername(state),
    pk: getPostDetailPk(state),
    loading: getPostDetailLoading(state),
    authUsername: getAuthUsername(state),
  }
)

const mapDispatchToProps = (dispatch, ownProps,) => (
  {
    fetchPostDetail: (postId) => dispatch(makePostDetailRequest(postId)),
    handleDeletePost: () => dispatch(makeDeletePostRequest(
        Number(ownProps.match.params.postId)
      )),
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetailContainer);
