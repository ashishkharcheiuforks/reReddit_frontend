import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";

import "./styles.css";
import SubscriptionButtonContainer from "../../containers/SubscriptionButtonContainer";

const SideBar = props => {
  const {
    subredditTitle,
    description,
    authenticatedUsername,
    showUserAuthRegisterModal,
    history
  } = props;

  const handleCreatePostClick = () => {
    if (authenticatedUsername) {
      return history.push(`/r/${subredditTitle}/createPost`);
    } else {
      return showUserAuthRegisterModal();
    }
  };

  return (
    <div className="sidebar-content">
      <p className="sidebar-header">SUBREDDIT DETAILS</p>
      <div className="title">
        <h2>r/{subredditTitle}</h2>
      </div>

      <div className="description">{description}</div>
      <SubscriptionButtonContainer subredditTitle={subredditTitle} />

      <Button
        id="create-post-button"
        className="sidebar-button"
        onClick={handleCreatePostClick}
      >
        CREATE POST
      </Button>
    </div>
  );
};

export default withRouter(SideBar);
