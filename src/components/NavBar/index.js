import React from 'react';
import {
  Navbar,
  Nav,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import "./styles.css";
import NavBarDropdown from './NavBarDropdown';
import SearchBarContainer from '../../containers/SearchBarContainer';

const NavBar = ({children, subscribed}) => {
  
  return (
    <Navbar inverse fixed="true" fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact to="/">reReddit</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      
      <Nav>
        <NavBarDropdown subscribed={subscribed} />
      </Nav>
      <SearchBarContainer />
      
      {children}
    </Navbar>
  );
};

export default NavBar;
