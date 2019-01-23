import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { MenuItem, Dropdown } from "react-bootstrap";
import {
  IoMdLogOut,
  IoMdCreate,
  IoMdSettings,
  IoLogoGithub,
  IoMdMenu
} from "react-icons/io";

import "./styles.css";

const MobileUserAuthNav = props => {
  const {
    authUsername,
    handleLogout,
    showModal,
    redirectToCreatePost,
    redirectToCreateSubreddit
  } = props;

  const authenticatedMenu = (
    <Fragment>
      <MenuItem eventKey={3.1} onClick={redirectToCreatePost}>
        <IoMdSettings /> Edit profile
      </MenuItem>
      <MenuItem eventKey={3.1} onClick={redirectToCreatePost}>
        <IoMdCreate /> Create post
      </MenuItem>
      <MenuItem eventKey={3.2} onClick={redirectToCreateSubreddit}>
        <IoMdCreate /> Create subreddit
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4} onClick={handleLogout}>
        <IoMdLogOut /> Logout
      </MenuItem>
      <MenuItem
        eventKey={3.5}
        onClick={() => handleLogout()}
        href="https://github.com/cdunn6754/reReddit_frontend"
      >
        <IoLogoGithub /> reReddit GitHub
      </MenuItem>
    </Fragment>
  );

  const unAuthenticatedMenu = (
    <Fragment>
      <MenuItem eventKey="1" onClick={() => showModal("login")}>
        Sign in
      </MenuItem>
      <MenuItem
        eventKey="2"
        href="https://github.com/cdunn6754/reReddit_frontend"
      >
        reReddit Github
      </MenuItem>
    </Fragment>
  );

  return (
    <div id="mobile-user-auth-dropdown-container">
      <Dropdown pullRight id="authenticated-user-dropdown">
        <Dropdown.Toggle>
          <IoMdMenu />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {authUsername ? authenticatedMenu : unAuthenticatedMenu}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default withRouter(MobileUserAuthNav);
