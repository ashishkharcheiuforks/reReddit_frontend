import React, { Fragment } from 'react';
import {
  Navbar,
  Nav,
  MenuItem,
  NavDropdown,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

import "./styles.css";
import NavBarDropdown from './NavBarDropdown';

const NavBar = (props) => {
  
  return (
    <Navbar inverse fixed="true" fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact to="/">reReddit</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavBarDropdown subscribed={props.subscribed}/>
      </Nav>
      {props.children}
    </Navbar>
  );
};

export default NavBar;
