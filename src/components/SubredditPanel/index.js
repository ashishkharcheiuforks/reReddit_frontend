import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const SubredditPanel = ({ subreddit }) => (
  <div className="subreddit-panel">
    <div className="title-and-subscriptions">
      <h1>r/{subreddit.title}</h1>
      <p>{subreddit.members.length} Subscribers </p>
    </div>

    <div className="description">
      <p>{subreddit.description}</p>
    </div>

    <div className="subscription-button" />
  </div>
);

export default SubredditPanel;
