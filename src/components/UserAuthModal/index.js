import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaTimes, FaCheck } from 'react-icons/fa';

import './styles.css';

const UserAuthModal = (props) => {
  
  const {
    handleHide,
    title,
    formComponent,
    warningMessage,
    successMessage,
  } = props;
  
  let wMessage, sMessage = null;
  
  if (successMessage) {
    sMessage =
      <div id='message-container'>
        <FaCheck color='green' size='3em' />
        <p className="message" id="success-message" align='center'>
          successMessage
        </p>
      </div>
    }
    
    if (warningMessage) {
      wMessage =
        <div id='message-container'>
          <FaTimes color='red' size='3em'/>
          <p className="message" id="warning-message" align='center'>
            {warningMessage}
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
        {wMessage}
        {formComponent}
      </Modal.Body>
      
    </Modal>
  );
}

export default UserAuthModal;
