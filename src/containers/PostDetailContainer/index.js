import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makePostDetailRequest } from '../../actions/Posts';
import PostDetail from '../../components/PostDetail';
import {
  getPostDetailPk,
  getPostDetailBody,
  getPostDetailTitle,
  getPostDetailPosterUsername,
  getPostDetailLoading,
} from '../../reducers/postDetail';


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
    postPoster: getPostDetailPosterUsername(state),
    postPk: getPostDetailPk(state),
    loading: getPostDetailLoading(state),
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    fetchPostDetail: (postId) => dispatch(makePostDetailRequest(postId)),
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetailContainer);
