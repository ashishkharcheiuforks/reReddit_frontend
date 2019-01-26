import React from "react";

import reredditIcon from "../../../images/reredditIcon.png";
import "./styles.css";

const defaultMessage =
  "Such Empty! This subreddit does not yet have any posts.";
const EmptyPostList = ({ message = defaultMessage }) => (
  <div className="empty-list-content">
    <h2>
      <img id="rereddit-icon" src={reredditIcon} alt="reReddit" />
      <span>{message}</span>
    </h2>
  </div>
);

export default EmptyPostList;
