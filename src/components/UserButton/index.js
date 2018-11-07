import React from 'react';
import { Button } from 'react-bootstrap';

import './styles.css';


const UserButton = ({content, onClick, inverted}) => {
  const userButtonId = inverted ? "user-button-inverted" : "user-button-default";
  return (
      <div>
        <Button onClick={onClick} id={userButtonId} className="user-button">
          {content}
        </Button>
      </div>  
    );
};

export default UserButton;