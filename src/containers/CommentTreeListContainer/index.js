import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  makeCommentTreeRequest,
  makeCreateCommentRequest,
} from '../../actions/Comments';
import CommentTreeList from '../../components/CommentTreeList';

class CommentTreeListContainer extends Component {
  componentDidMount() {
    this.props.fetchCommentList(this.props.postPk)
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.postPk !== this.props.postPk) {
      this.props.fetchCommentList(this.props.postPk);
    }
  }
  
  render() {
    return <CommentTreeList {...this.props} />
  }
}

const mapStateToProps = state => (
  {
    loading: state.comments.loading,
    trees: state.comments.trees,
    error: state.comments.error,
    createCommentError: state.comments.createCommentError,
    createCommentLoading: state.comments.createCommentLoading,
    createdComment: state.comments.createdComment,
    postPk: state.post.pk
  }
)

const mapDispatchToProps = dispatch => (
  {
    fetchCommentList: (postId) => dispatch(makeCommentTreeRequest(postId)),
    handleCreateComment: (commentData) => dispatch(
      makeCreateCommentRequest(commentData)
    )
  }
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentTreeListContainer)