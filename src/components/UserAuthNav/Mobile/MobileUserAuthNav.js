import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { MenuItem, Dropdown } from "react-bootstrap";
import {
  IoMdLogOut,
  IoMdLogIn,
  IoMdCreate,
  IoMdSettings,
  IoLogoGithub,
  IoMdMenu,
  IoMdPerson
} from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";

import "./styles.css";

// This is a class because the dropdown doesn't hide well on mobile for
// some reason so state is needed to fix it
class MobileUserAuthNav extends Component {
  constructor(props) {
    super(props);

    this.state = { showMenu: false };
  }

  toggleShowMenu = () => this.setState({ showMenu: !this.state.showMenu });

  render() {
    const {
      authUsername,
      handleLogout,
      showModal,
      redirectToCreatePost,
      redirectToCreateSubreddit,
      redirectToUserProfile
    } = this.props;

    const authenticatedMenu = (
      <Fragment>
        <MenuItem eventKey={3.0} onClick={redirectToUserProfile}>
          <IoMdPerson /> View profile
        </MenuItem>
        <MenuItem eventKey={3.1} onClick={() => showModal("update")}>
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
      </Fragment>
    );

    const unAuthenticatedMenu = (
      <Fragment>
        <MenuItem eventKey="1" onClick={() => showModal("login")}>
          <IoMdLogIn /> Sign in
        </MenuItem>
        <MenuItem eventKey="1" onClick={() => showModal("register")}>
          <FaUserPlus /> Sign up
        </MenuItem>
        <MenuItem divider />
        <MenuItem
          eventKey="2"
          href="https://github.com/cdunn6754/reReddit_frontend"
          target="_blank"
        >
          <IoLogoGithub /> reReddit Github
        </MenuItem>
      </Fragment>
    );

    return (
      <div id="mobile-user-auth-dropdown-container">
        <Dropdown
          pullRight
          id="mobile-user-dropdown"
          onToggle={this.toggleShowMenu}
          open={this.state.showMenu}
        >
          <Dropdown.Toggle>
            <IoMdMenu />
          </Dropdown.Toggle>
          <Dropdown.Menu onClick={this.toggleShowMenu}>
            {authUsername ? authenticatedMenu : unAuthenticatedMenu}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

MobileUserAuthNav.propTypes = {
  authUsername: PropTypes.string,
  handleLogout: PropTypes.func,
  showModal: PropTypes.func,
  redirectToCreatePost: PropTypes.func,
  redirectToCreateSubreddit: PropTypes.func,
  redirectToUserProfile: PropTypes.func
};

export default withRouter(MobileUserAuthNav);
