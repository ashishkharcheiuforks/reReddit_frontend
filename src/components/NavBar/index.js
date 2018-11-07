import React from 'react';
import { Navbar,
  NavItem,
  Nav,
  MenuItem,
  NavDropdown,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

import "./styles.css"
import UserButton from '../UserButton'

const NavBar = (props) => {
  const {
    showModal
  } = props;
  
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
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
    
          <LinkContainer exact to="/users">
            <NavItem>Users</NavItem>
          </LinkContainer>
          <LinkContainer exact to="/subs">
            <NavItem>Subs</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight className="right-user-links">
          <NavItem eventKey={4}>
            <UserButton onClick={() => showModal()} content={"login"} inverted/>
          </NavItem>
          <NavItem eventKey={5}>
            <UserButton content={"sign up"}/>
          </NavItem>        
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;