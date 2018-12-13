import React from 'react';
import { connect } from 'react-redux';

import CommentEditor from '../../components/CommentEditor';
import { makeCreateCommentRequest } from '../../actions/Comments'

const CommentEditorContainer = (props) => (
    <CommentEditor {...props} />
)

const mapStateToProps = (state, ownProps) => (
    {
      parentPk: ownProps.commentParentPk || state.post.pk,
      rootComment: ownProps.rootComment, // indicates whether this is a root comment
    }                                    // or a comment on another comment
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
