import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const UserAuthModal = ({show,}) => (
  <Modal
      open={show}
      size='small'
  >
    <Modal.Content>
      <h3>Noice Modal</h3>
    </Modal.Content>
  </Modal>
);

const mapStateToProps = state => (
  {
    show: state.userAuthModal.showModal
  }
);

export default connect(
  mapStateToProps
)(UserAuthModal);