import React from "react";

import UserButton from "../../UserButton";
import "./styles.css";

const UnauthenticatedTextEditor = props => {
  const { showUserAuthModal } = props;

  return (
    <div className="unauth-text-editor-content">
      <div className="unauth-te-text">Got a comment? Login or sign up.</div>

      <div className="unauth-te-buttons">
        <UserButton onClick={() => showUserAuthModal("login")} inverted>
          login
        </UserButton>
        <UserButton onClick={() => showUserAuthModal("register")}>
          sign up
        </UserButton>
      </div>
    </div>
  );
};

export default UnauthenticatedTextEditor;
