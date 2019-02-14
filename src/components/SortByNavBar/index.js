import React from "react";
import { MenuItem, DropdownButton } from "react-bootstrap";

import "./styles.css";

const SortByNavBar = props => {
  const { currentSortOption, handleSortUpdate } = props;

  const updateSort = option => handleSortUpdate(option);

  return (
    <div className="sort-by-nav-bar-content">
      <DropdownButton
        className="sort-by-drop-down"
        title={`SORT ${currentSortOption}`}
      >
        <MenuItem eventKey={4.1} onClick={() => updateSort("best")}>
          Best
        </MenuItem>
        <MenuItem eventKey={4.2} onClick={() => updateSort("new")}>
          New
        </MenuItem>
      </DropdownButton>
    </div>
  );
};

export default SortByNavBar;
