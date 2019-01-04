import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostEditor from '../../components/PostEditor'
import {
  makeUpdatePostRequest,
} from '../../actions/Posts';
import {
  getPostBodyById,
} from '../../reducers/postList';
import {
  getPostDetailBody
} from '../../reducers/postDetail';


const PostEditorContainer = (props) => {
  const {
    handleUpdateComment,
    body,
  } = props;
  
  return (
    <PostEditor  {...{handleUpdateComment, initialValue: body}}/>
  )
}

PostEditorContainer.propTypes = {
  handleUpdateComment: PropTypes.func,
};

mapStateToProps = (state, ownProps) => ({
  body: getPostBodyByPk(state, ownProps.pk) || getPostDetailBody(state);
})

mapDispatchToProps = (dispatch, ownProps) => ({
  handleUpdateComment: dispatch(makeUpdatePostRequest(ownProps.pk)),
});


export default connect(
  null,
  mapDispatchToProps,
  mergeProps,
)
