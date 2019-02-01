import React from "react";

import "./styles.css";

const UserProfileSidebar = props => {
  const { username } = props;

  return (
    <div className="up-sidebar-content">
      <div className="up-information-sidebar">
        <h2>{username}</h2>
      </div>
    </div>
  );
};

export default UserProfileSidebar;
