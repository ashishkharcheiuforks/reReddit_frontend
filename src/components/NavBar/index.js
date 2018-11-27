import React from 'react';
import {
  Navbar,
  Nav,
  MenuItem,
  NavDropdown,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

import "./styles.css";

const NavBar = (props) => {
  
  // the static links do not depend on user subreddit subscriptions
  // users who subscribe to nothing can still view all Posts
  // ordered by popular, new, etc.
  const dropDownLinksStatic = (
    <>
      <LinkContainer exact to='/'>
        <MenuItem eventKey={3.1}>
          Home
        </MenuItem>
      </LinkContainer>
      <LinkContainer exact to='/r/popular'>
        <MenuItem eventKey={3.2}>
          Popular
        </MenuItem>
      </LinkContainer>
      <LinkContainer exact to='/r/new'>
        <MenuItem eventKey={3.3}>
          New
        </MenuItem>
      </LinkContainer>
     </>
  )
  
  return (
    <div>
      <Navbar inverse fixed="true" fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink exact to="/">reReddit</NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown
            className='feed-dropdown'
            eventKey={3}
            title="feed"
            id="basic-nav-dropdown"
          >
            {dropDownLinksStatic}
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        {props.children}
      </Navbar>
    </div>
  );
};

export default NavBar;
