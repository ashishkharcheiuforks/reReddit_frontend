import React from "react";

import UserButton from "../UserButton";
import "./styles.css";

const UnauthenticatedUser = ({ showModal }) => {
  return (
    <div className="unauthenticated-user-links">
      <UserButton onClick={() => showModal("login")} inverted>
        login
      </UserButton>
      <UserButton onClick={() => showModal("register")}>sign up</UserButton>
    </div>
  );
};

export default UnauthenticatedUser;
