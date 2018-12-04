import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import CreatePost from '../../components/CreatePost';
import { makeCreatePostRequest } from '../../actions/Posts';

class CreatePostContainer extends Component {

  render() {
    return <CreatePost {...this.props} />
  }
}

const mapDispatchToProps = dispatch => (
  {
    handleCreatePost: (title, body, subredditTitle) =>
      dispatch(makeCreatePostRequest(title, body, subredditTitle))
  }
)

export default connect(
  null,
  mapDispatchToProps
)(CreatePostContainer);
