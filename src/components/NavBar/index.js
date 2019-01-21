import React from "react";
import { Navbar, Nav, FormGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";
import reredditIcon from "./reredditIcon.png";
import NavBarDropdown from "./NavBarDropdown";
import SearchBarContainer from "../../containers/SearchBarContainer";

const NavBar = ({ children, subscribed }) => {
  return (
    <Navbar id="navbar-base" inverse fixed="true" fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <Link id="home-nav-link" to="/">
            <div className="home-link-contents">
              <img id="rereddit-icon" src={reredditIcon} alt="Icon" />
              <div id="nav-home-link">reReddit</div>
            </div>
          </Link>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav>
        <NavBarDropdown subscribed={subscribed} />
      </Nav>
      <SearchBarContainer />

      {children}
    </Navbar>
  );
};

export default NavBar;
