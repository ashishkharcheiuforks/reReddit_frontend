import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { Dropdown, MenuItem } from 'react-bootstrap';

import './styles.css';

const EllipsisButton = ({dropDownOptions}) => (
  
  <Dropdown id="ellipsis-dropdown" >
    <Dropdown.Toggle noCaret className="toggle-button">
      <FaEllipsisH/>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu">
      <MenuItem eventKey="1">Delete</MenuItem>
    </Dropdown.Menu>
  </Dropdown>
)

export default EllipsisButton;

  // <Button bsSize='xsmall' className='comment-buttons'>
  //   <FaEllipsisH />
  // </Button>
