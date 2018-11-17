import React from 'react';
import { Modal, Alert } from 'react-bootstrap';
import { FaTimes, FaCheck } from 'react-icons/fa';

import './styles.css';

const UserAuthModal = (props) => {
  
  const {
    handleHide,
    title,
    formComponent,
    messageProps,
  } = props;
  
  const {
    errorMessage,
    successMessage,
  } = messageProps;
  
  let eMessage, sMessage = null;
  
  if (successMessage) {
    sMessage =
      <Alert bsStyle='success' className="modal-alert">
        <FaCheck color='green' size='3em' />
        <p className="message" id="success-text" align='center'>
          {successMessage}
        </p>
      </Alert>
    }

    if (errorMessage) {
      eMessage =
      <Alert bsStyle='danger' className="modal-alert">
        <FaTimes color='red' size='3em' />
        <p className="message" id="error-text" align='center'>
          {errorMessage}
        </p>
      </Alert>
    }
  
  return (
    <Modal
      onHide={handleHide}
      show
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {sMessage}
        {eMessage}
        {formComponent}
      </Modal.Body>
      
    </Modal>
  );
}

export default UserAuthModal;
