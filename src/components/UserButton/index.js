import React from "react";
import { Button } from "react-bootstrap";

import "./styles.css";

const UserButton = ({ children, onClick, inverted }) => {
  const userButtonId = inverted
    ? "user-button-inverted"
    : "user-button-default";
  return (
    <Button onClick={onClick} id={userButtonId} className="user-button">
      {children}
    </Button>
  );
};

export default UserButton;
