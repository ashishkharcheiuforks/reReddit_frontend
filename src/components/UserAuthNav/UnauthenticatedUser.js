import React from 'react';
import {
  Nav,
  NavItem,
} from 'react-bootstrap';

import UserButton from '../UserButton';
import './styles.css'

const UnauthenticatedUser = ({showModal}) => {
  
  return (
    <Nav pullRight className="right-user-links">
      <NavItem eventKey={4}>
        <UserButton onClick={() => showModal()} content={"login"} inverted/>
      </NavItem>
      <NavItem eventKey={5}>
        <UserButton content={"sign up"}/>
      </NavItem>        
    </Nav>    
  );
}

export default UnauthenticatedUser;

