import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makePostDetailRequest } from '../../actions/Posts';
import PostDetail from '../../components/PostDetail';


class PostDetailContainer extends Component {
  componentDidMount() {
    const postId = this.props.match.params.postId || null;
    
    this.props.fetchPostDetail(postId);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.postPk !== this.props.postPk) {
      this.prochCommentList(this.props.postPk);
    }
  }
  
  render() {
    return <PostDetail {...this.props} />;
  }
}

const mapStateToProps = (state) => (
  {
    postBody: state.post.body,
    postTitle: state.post.title,
    postPoster: state.post.poster,
    postPk: state.post.pk,
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
