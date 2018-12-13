import React from 'react';
import { connect } from 'react-redux';

import CommentEditor from '../../components/CommentEditor';
import { makeCreateCommentRequest } from '../../actions/Comments'

const CommentEditorContainer = (props) => (
    <CommentEditor {...props} />
)

const mapStateToProps = (state) => (
    {
      postPk: state.post.pk,
    }
)

const mapDispatchToProps = (dispatch) => (
  {
    handleCreateComment: (commentData) => dispatch(
      makeCreateCommentRequest(commentData)
    ),
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentEditorContainer);
