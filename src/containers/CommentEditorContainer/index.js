import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

const mapDispatchToProps = (dispatch, ownProps) => {
  // This is used for two occasions, creating and updating a comment.
  debugger;
  switch (ownProps.usage) {
    case 'create':
      const handleCreateCommentWrapper = (parentPk) => (commentBody) => dispatch(
        makeCreateCommentRequest({
            body: commentBody,
            parentPk,
            rootComment: ownProps.rootComment,
          })
        );
      
      return {handleCreateCommentWrapper}
    default:
      return {}
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  // This mess is caused by the late determination of parentPk in mapStateToProps
  if (ownProps.usage === 'create') {
    const handleCreateComment = dispatchProps.handleCreateCommentWrapper(
      stateProps.parentPk
    );
    
    return ({
      ...stateProps,
      ...ownProps,
      handleCreateComment,
    });
  }
  return {...stateProps, ...dispatchProps, ...ownProps};
}

CommentEditorContainer.propTypes = {
  usage: PropTypes.oneOf(['update', 'create']),
  rootComment: PropTypes.bool,
  commentParentPk: PropTypes.number,
  handleCreateComment: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(CommentEditorContainer);
