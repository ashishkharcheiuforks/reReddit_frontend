import React from "react";
import { Nav, DropdownButton, MenuItem } from "react-bootstrap";

import "./styles.css";

const AuthenticatedUser = ({ username, handleLogout }) => {
  return (
    <div className="authenticated-user-dropdown-container">
      <DropdownButton
        className="user-dropdown"
        title={username}
        pullRight
        id="user-nav-dropdown"
      >
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4} onClick={() => handleLogout()}>
          Logout
        </MenuItem>
        <MenuItem
          eventKey={3.5}
          onClick={() => handleLogout()}
          href="https://github.com/cdunn6754/reReddit_frontend"
        >
          reReddit github
        </MenuItem>
      </DropdownButton>
    </div>
  );
};

export default AuthenticatedUser;
