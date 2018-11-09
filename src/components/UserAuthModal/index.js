import React from 'react';
import { Modal } from 'react-bootstrap';

const UserAuthModal = (props) => {
  
  const {
    handleHide,
    title,
    formComponent,
  } = props;
  
  return (
    <Modal 
      onHide={handleHide}
      show
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {formComponent}
      </Modal.Body>
      
    </Modal>
  );
}

export default UserAuthModal;