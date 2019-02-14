import React from "react";
import { MenuItem, DropdownButton } from "react-bootstrap";

import "./styles.css";

const SortByNavBar = props => {
  const { currentSortOption, handleSortUpdate } = props;

  const updateSort = option => handleSortUpdate(option);

  const dropDownButtonLabel = (
    <div className="sb-dd-button-label">
      <span id="sort-button-title">SORT</span>
      <span id="sb-title-option">{currentSortOption.toUpperCase()}</span>
    </div>
  );

  return (
    <div className="sort-by-nav-bar-content">
      <DropdownButton
        className="sort-by-drop-down"
        title={dropDownButtonLabel}
        id="basic-nav-dropdown"
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
