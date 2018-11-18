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
            <LinkContainer exact to='/sub-post/'>
              <MenuItem eventKey={3.1}>
                nature-stock
              </MenuItem>
            </LinkContainer>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
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
