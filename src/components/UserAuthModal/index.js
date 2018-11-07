import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

const UserAuthModal = ({show,onHide}) => (
  <Modal 
    show={show}
    onHide={onHide}
  >
    <Modal.Header closeButton>
      <Modal.Title>Modal Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>This is the Bod</h4>
    </Modal.Body>
  </Modal>
);

export default UserAuthModal;