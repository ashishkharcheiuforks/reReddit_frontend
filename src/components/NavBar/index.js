import React from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import "./styles.css";
import NavBarDropdown from './NavBarDropdown';

const NavBar = ({children, subscribed}) => {
  
  return (
    <Navbar inverse fixed="true" fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact to="/">reReddit</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavBarDropdown subscribed={subscribed}/>
      </Nav>
      {children}
    </Navbar>
  );
};

export default NavBar;
