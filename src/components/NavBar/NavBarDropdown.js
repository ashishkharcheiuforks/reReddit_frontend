import React from "react";
import { MenuItem, DropdownButton } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./styles.css";

const NavBarDropdown = ({ subscribedSubredditTitles }) => {
  const subscribedSubs = subscribedSubredditTitles.map((title, idx) => (
    <LinkContainer key={idx} exact to={"/r/" + title}>
      <MenuItem eventKey={idx}>{title}</MenuItem>
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
      {subscribedSubredditTitles.length > 0 && (
        <MenuItem divider eventKey={3.4} />
      )}
      {subscribedSubs}
    </DropdownButton>
  );
};

export default NavBarDropdown;
