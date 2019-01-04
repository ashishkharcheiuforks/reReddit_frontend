import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextEditor from '../../components/TextEditor'
import {
  makeUpdatePostRequest,
} from '../../actions/Posts';
import {
  getPostDetailBody
} from '../../reducers/postDetail';


const PostEditorContainer = (props) => {
  const {
    handleSubmit,
    body,
  } = props;
  
  return (
    <TextEditor
      handleSubmit={handleSubmit}
      placeholder={body}
      initialValue={body}
    />
  )
}

PostEditorContainer.propTypes = {
  onEditorSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
  body: PropTypes.string,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: async (body) => {
    try {
      await dispatch(makeUpdatePostRequest(ownProps.pk, body));
    } catch {
    }
    // Callback to effect some change when submission occurs (like hide the editor)
    ownProps.onEditorSubmitSuccess && ownProps.onEditorSubmitSuccess();
    
  },
});


export default connect(
  null,
  mapDispatchToProps,
)(PostEditorContainer);
