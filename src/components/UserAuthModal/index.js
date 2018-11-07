import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

const UserAuthModal = ({show,}) => (
  <Modal show={show}>
    <Modal.Header closeButton>
      <Modal.Title>Modal Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>This is the Bod</h4>
    </Modal.Body>
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