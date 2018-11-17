import React from 'react';
import { Modal } from 'react-bootstrap';
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
      <div id='message-container'>
        <FaCheck color='green' size='3em' />
        <p className="message" id="success-message" align='center'>
          {successMessage}
        </p>
      </div>
    }
    
    if (errorMessage) {
      eMessage =
        <div id='message-container'>
          <FaTimes color='red' size='3em'/>
          <p className="message" id="warning-message" align='center'>
            {errorMessage}
          </p>
        </div>
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
