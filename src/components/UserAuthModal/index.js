import React from 'react';
import { Modal } from 'react-bootstrap';

import './styles.css';
import { SuccessAlert, ErrorAlert } from '../AlertMessage';

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
      <SuccessAlert>
        {successMessage}
      </SuccessAlert>
    }

    if (errorMessage) {
      eMessage =
      <ErrorAlert>
        {errorMessage}
      </ErrorAlert>
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
