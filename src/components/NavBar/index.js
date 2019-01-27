import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, FormGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserAuthNavContainer from "../../containers/UserAuthNavContainer";
import reredditIcon from "../../images/reredditIcon.png";
import NavBarDropdown from "./NavBarDropdown";
import SearchBarContainer from "../../containers/SearchBarContainer";
import "./styles.css";

const NavBar = props => {
  const { userSubreddits } = props;

  return (
    <div id="navbar-base">
      <Link id="home-nav-link" to="/">
        <div className="home-link-contents">
          <img id="rereddit-icon" src={reredditIcon} alt="Icon" />
          <div id="nav-home-link">reReddit</div>
        </div>
      </Link>

      <div id="subreddit-feed-dropdown-container">
        <NavBarDropdown subscribedSubredditTitles={userSubreddits} />
      </div>

      <div id="searchbar-container">
        <SearchBarContainer />
      </div>

      <div id="user-auth-dropdown-container">
        <UserAuthNavContainer />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  userSubreddits: PropTypes.arrayOf(PropTypes.string),
  showModal: PropTypes.func,
  handleLogout: PropTypes.func,
  authUsername: PropTypes.string
};

export default NavBar;
