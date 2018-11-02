import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import "./styles.css"

const NavBar = () => (
  
  <div>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/users">
          <NavItem eventKey={1} href="#">Users</NavItem>
        </LinkContainer>
        <LinkContainer to="/subs">
          <NavItem eventKey={2} href="#">Subs</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  </div>
      
);

export default NavBar;