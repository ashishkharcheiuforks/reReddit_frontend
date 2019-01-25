import React from "react";

import reredditIcon from "../../images/reredditIcon.png";

const EmptyPostList = ({ message = "Such Empty!" }) => (
  <div className="empty-list-content">
    <h2>
      <img id="rereddit-icon" src={reredditIcon} alt="reReddit" />
      {message}
    </h2>
  </div>
);

export default EmptyPostList;
