import React from "react";
import PropTypes from "prop-types";
import { MdMenu } from "react-icons/md";
import { MenuItem, Dropdown } from "react-bootstrap";

import "./styles.css";

const MobileUserAuthNav = props => {
  const { authUsername, handleLogout, showModal } = props;

  const authenticatedMenu = (
    <MenuItem eventKey="1" onClick={handleLogout}>
      Logout
    </MenuItem>
  );

  const unAuthenticatedMenu = (
    <MenuItem eventKey="1" onClick={() => showModal("login")}>
      Sign in
    </MenuItem>
  );

  return (
    <div id="mobile-user-auth-dropdown-container">
      <Dropdown pullRight id="authenticated-user-dropdown">
        <Dropdown.Toggle>
          <MdMenu />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {authUsername ? authenticatedMenu : unAuthenticatedMenu}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MobileUserAuthNav;
