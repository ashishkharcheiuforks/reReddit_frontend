import React, { Component } from "react";
import { MenuItem, DropdownButton } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./styles.css";

const SubredditDropdown = props => {
  const {
    dropdownTitle,
    handleSubredditSelection,
    authUserSubredditTitles
  } = props;

  const menuItems = authUserSubredditTitles.map((title, idx) => (
    <MenuItem key={idx} onClick={() => handleSubredditSelection(title)}>
      r/{title}
    </MenuItem>
  ));

  return (
    <DropdownButton
      className="cp-subreddit-dropdown"
      title={`r/${dropdownTitle}`}
      id="cp-subreddit-dropdown"
    >
      {menuItems}
    </DropdownButton>
  );
};

export default SubredditDropdown;
