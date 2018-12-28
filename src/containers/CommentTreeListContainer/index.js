import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  makeCommentTreeRequest,
  makeCreateCommentRequest,
} from '../../actions/Comments';
import CommentTreeList from '../../components/CommentTreeList';
import { getRootCommentPks, getCommentsLoading, } from '../../reducers/comments';
import { getPostDetailPk } from '../../reducers/postDetail';

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
    loading: getCommentsLoading(state),
    rootCommentPks: getRootCommentPks(state),
    error: state.comments.error,
    createCommentError: state.comments.createCommentError,
    createCommentLoading: state.comments.createCommentLoading,
    createdComment: state.comments.createdComment,
    postPk: getPostDetailPk(state),
  }
)

const mapDispatchToProps = dispatch => (
  {
    fetchCommentList: (postId) => dispatch(makeCommentTreeRequest(postId)),
  }
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentTreeListContainer);
