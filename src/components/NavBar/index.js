import React from 'react';
import { Navbar,
  NavItem,
  Nav,
  MenuItem,
  NavDropdown,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import "./styles.css"

const NavBar = () => (
  
  <div>
    <Navbar inverse fixed="true" fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">reReddit</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavDropdown className='feed-dropdown' eventKey={3} title="feed" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
  
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