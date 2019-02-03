import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextEditorContainer from "../TextEditorContainer";
import {
  makeCreateCommentRequest,
  makeUpdateCommentRequest
} from "../../actions/Comments";
import { getPostDetailPk } from "../../reducers/postDetail";

const CommentEditorContainer = props => {
  const placeholder = "What are your thoughts?";
  return (
    <TextEditorContainer
      {...props}
      placeholder={placeholder}
      dontFocusOnEditor={props.dontFocusOnEditor}
    />
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // This is used for two occasions, creating and updating a comment.
  switch (ownProps.usage) {
    case "create": {
      const handleSubmit = commentBody =>
        dispatch(
          makeCreateCommentRequest({
            body: commentBody,
            parentPk: ownProps.parentPk,
            rootComment: ownProps.rootComment
          })
        );
      return { handleSubmit };
    }

    case "update": {
      const handleSubmit = body => {
        // onEditorSubmit is a hook so that the parent component
        // can effect changes beyond the action dispatch, e.g. toggle editor
        ownProps.onEditorSubmit && ownProps.onEditorSubmit();

        return dispatch(
          makeUpdateCommentRequest({
            body,
            pk: ownProps.pk
          })
        );
      };
      return { handleSubmit };
    }

    default:
      return {};
  }
};

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//   // This mess is caused by the late determination of parentPk in mapStateToProps
//   if (ownProps.usage === 'create') {
//     const handleSubmit = dispatchProps.handleCreateCommentWrapper(
//       stateProps.parentPk
//     );
//
//     return ({
//       ...stateProps,
//       ...ownProps,
//       handleSubmit,
//     });
//   }
//   return {...ownProps, ...stateProps, ...dispatchProps};
// }

CommentEditorContainer.propTypes = {
  usage: PropTypes.oneOf(["update", "create"]).isRequired,
  rootComment: PropTypes.bool,
  commentParentPk: PropTypes.number,
  pk: PropTypes.number,
  postPk: PropTypes.number,
  handleCreateComment: PropTypes.func,
  onEditorSubmit: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(CommentEditorContainer);
