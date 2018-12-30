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
    return <PostDetail {...this.props} />;
  }
}

const mapStateToProps = (state) => (
  {
    postBody: getPostDetailBody(state),
    postTitle: getPostDetailTitle(state),
    posterUsername: getPostDetailPosterUsername(state),
    postPk: getPostDetailPk(state),
    loading: getPostDetailLoading(state),
    authUsername: getAuthUsername(state),
  }
)

const mapDispatchToProps = (dispatch, ownProps,) => (
  {
    fetchPostDetail: (postId) => dispatch(makePostDetailRequest(postId)),
    handleDeletePost: () => dispatch(makeDeletePostRequest(ownProps.match.params.postId)),
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetailContainer);
