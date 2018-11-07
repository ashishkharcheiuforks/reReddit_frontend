import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button} from 'react-bootstrap';

const UserAuthModal = ({show,onHide,userLogin}) => {
  
  const credentials = {username: "Bobby", password: "TheEnd6754"}
  return (
    <Modal 
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>This is the Bod</h4>
        <Button onClick={ () => userLogin(credentials)}>
          Login
        </Button>
      </Modal.Body>
      
    </Modal>
  );
}

export default UserAuthModal;