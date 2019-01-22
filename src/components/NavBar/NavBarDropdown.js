import React from "react";
import { NavDropdown, MenuItem, DropdownButton } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./styles.css";

const NavBarDropdown = ({ subscribed }) => {
  const subscribedSubs = subscribed.map(sub => (
    <LinkContainer key={sub.pk} exact to={"/r/" + sub.title}>
      <MenuItem eventKey={sub.pk}>{sub.title}</MenuItem>
    </LinkContainer>
  ));

  return (
    <DropdownButton
      className="feed-dropdown"
      title="feed"
      id="basic-nav-dropdown"
    >
      <LinkContainer exact to="/">
        <MenuItem eventKey={3.1}>Home</MenuItem>
      </LinkContainer>
      <LinkContainer exact to="/r/popular">
        <MenuItem eventKey={3.2}>Popular</MenuItem>
      </LinkContainer>
      <LinkContainer exact to="/r/all">
        <MenuItem eventKey={3.3}>All</MenuItem>
      </LinkContainer>
      <MenuItem divider eventKey={3.4} />
      {subscribedSubs}
    </DropdownButton>
  );
};

export default NavBarDropdown;
