import React from 'react';
import { Navbar,
  NavItem,
  Nav,
  MenuItem,
  NavDropdown,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import "./styles.css"
import UserButton from '../UserButton'

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
  
        <LinkContainer to="/users">
          <NavItem eventKey={1} href="#">Users</NavItem>
        </LinkContainer>
        <LinkContainer to="/subs">
          <NavItem eventKey={2} href="#">Subs</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight className="right-user-links">
        <NavItem eventKey={4}>
          <UserButton onClick={() => alert("hiya")} content={"login"} inverted/>
        </NavItem>
        <NavItem eventKey={4}>
          <UserButton content={"sign up"}/>
        </NavItem>        
      </Nav>
    </Navbar>
  </div>
);

export default NavBar;