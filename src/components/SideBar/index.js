import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Button } from "react-bootstrap";

import "./styles.css";
import SubscriptionButtonContainer from "../../containers/SubscriptionButtonContainer";

const SideBar = props => {
  const {
    subredditTitle,
    description,
    authenticatedUsername,
    showUserAuthRegisterModal,
    history: { push: historyPush },
    pseudo
  } = props;

  const handleCreatePostClick = () => {
    if (authenticatedUsername) {
      return historyPush(`/r/${subredditTitle}/createPost`);
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

      {!pseudo && (
        <div className="sidebar-button-container">
          <SubscriptionButtonContainer subredditTitle={subredditTitle} />
          <Button
            id="create-post-button"
            className="sidebar-button"
            onClick={handleCreatePostClick}
          >
            CREATE POST
          </Button>
        </div>
      )}
    </div>
  );
};

SideBar.propTypes = {
  subredditTitle: PropTypes.string,
  description: PropTypes.string,
  authenticatedUsername: PropTypes.string,
  showUserAuthRegisterModal: PropTypes.func,
  pseudo: PropTypes.bool
};

export default withRouter(SideBar);
