import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import "./styles.css"

const NavBar = (props) => (
  /*<header className="navbar">
      <NavLink to="/" activeClassName="navlink-active">Home</NavLink>
      <NavLink to="/subs" activeClassName="navlink-active">Subs</NavLink>
      <NavLink to="/subs" activeClassName="navlink-active">Users</NavLink>
  </header>*/
  
  <div>
    <Navbar inverse className='navbar-custom'>
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