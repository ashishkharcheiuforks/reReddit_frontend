import React from "react";
import { Nav, DropdownButton, MenuItem } from "react-bootstrap";
import {
  IoMdLogOut,
  IoMdCreate,
  IoMdSettings,
  IoLogoGithub
} from "react-icons/io";

import "./styles.css";

const AuthenticatedUser = props => {
  const {
    username,
    handleLogout,
    redirectToCreatePost,
    redirectToCreateSubreddit
  } = props;

  return (
    <div className="authenticated-user-dropdown-container">
      <DropdownButton
        className="user-dropdown"
        title={username}
        pullRight
        id="user-nav-dropdown"
      >
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
          target="_blank"
        >
          <IoLogoGithub /> reReddit GitHub
        </MenuItem>
      </DropdownButton>
    </div>
  );
};

export default AuthenticatedUser;
