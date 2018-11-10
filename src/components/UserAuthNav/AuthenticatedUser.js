import React from 'react';
import {
  Nav,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

import './styles.css'

const AuthenticatedUser = ({username}) => {
  
  return (
    <Nav pullRight className="auth-dropdown-container">
          <NavDropdown 
            className='user-dropdown'
            eventKey={3}
            title={username}
            id="user-nav-dropdown"
          >
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
    </Nav>    
  );
}

export default AuthenticatedUser;