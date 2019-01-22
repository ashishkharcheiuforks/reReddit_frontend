import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, FormGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserAuthNav from "../../components/UserAuthNav";
import reredditIcon from "./reredditIcon.png";
import NavBarDropdown from "./NavBarDropdown";
import SearchBarContainer from "../../containers/SearchBarContainer";
import "./styles.css";

const NavBar = props => {
  const { userSubreddits, showModal, authUsername, handleLogout } = props;

  return (
    <div id="navbar-base">
      <Link id="home-nav-link" to="/">
        <div className="home-link-contents">
          <img id="rereddit-icon" src={reredditIcon} alt="Icon" />
          <div id="nav-home-link">reReddit</div>
        </div>
      </Link>

      <div id="subreddit-feed-dropdown-container">
        <NavBarDropdown subscribed={userSubreddits} />
      </div>

      <div id="searchbar-container">
        <SearchBarContainer />
      </div>

      <div id="user-auth-dropdown-container">
        <UserAuthNav
          showModal={showModal}
          username={authUsername}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  userSubreddits: PropTypes.arrayOf(
    PropTypes.shape({
      pk: PropTypes.number,
      created: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      moderators: PropTypes.arrayOf(PropTypes.number),
      members: PropTypes.arrayOf(PropTypes.number)
    })
  ),
  showModal: PropTypes.func,
  handleLogout: PropTypes.func,
  authUsername: PropTypes.string
};

export default NavBar;
