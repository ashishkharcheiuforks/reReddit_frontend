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
        <UserButton onClick={() => showModal('login')} inverted>
          login
        </UserButton>
      </NavItem>
      <NavItem eventKey={5}>
        <UserButton onClick={() => showModal('register')}>
          sign up
        </UserButton>
      </NavItem>
    </Nav>
  );
}

export default UnauthenticatedUser;
