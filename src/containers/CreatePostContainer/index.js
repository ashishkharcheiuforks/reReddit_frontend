import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import CreatePost from '../../components/CreatePost';

class CreatePostContainer extends Component {

  render() {
    return <CreatePost {...this.props} />
  }
}

export default connect(
  null,
  null
)(CreatePostContainer);
