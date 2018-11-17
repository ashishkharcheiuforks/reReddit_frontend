import React from 'react';
import {
  Nav,
  NavItem,
} from 'react-bootstrap';

import UserButton from '../UserButton';
import './styles.css'

const UnauthenticatedUser = ({showModal, middleWareTest}) => {

  return (
    <Nav pullRight className="right-user-links">
      <NavItem eventKey={4}>
        <UserButton
          onClick={() => showModal('login')}
          content={"login"}
          inverted
        />
      </NavItem>
      <NavItem eventKey={5}>
        <UserButton
          onClick={() => showModal('register')}
          content={"sign up"}
        />
      </NavItem>
    </Nav>
  );
}

export default UnauthenticatedUser;
