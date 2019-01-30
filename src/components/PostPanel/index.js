import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Panel, Button, MenuItem } from "react-bootstrap";
import { FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

import VoterContainer from "../../containers/VoterContainer";
import EllipsisButton from "../EllipsisButton";
import ShareButton from "../ShareButton";
import { withMaybe } from "../../utilities/HOC";
import { POST_DETAIL_URL } from "../../urls";
import "./styles.css";

class PostPanel extends Component {
  handlePanelClick = e => {
    const { subredditTitle, pk, history } = this.props;

    if (e.target instanceof HTMLDivElement) {
      history.push(POST_DETAIL_URL(subredditTitle, pk));
    }
  };

  handleShowEditPost = e => {
    // show the post editor and then switch to the post detail page
    const {
      subredditTitle,
      pk,
      togglePostEditor,
      showPostEditor,
      history
    } = this.props;

    if (!showPostEditor) {
      togglePostEditor();
    }

    history.push(POST_DETAIL_URL(subredditTitle, pk));
  };

  render() {
    const {
      upvotes,
      pk,
      title,
      subredditTitle,
      posterUsername,
      authUsername,
      created,
      voteDisplayState,
      handleDeletePost,
      history
    } = this.props;

    const AuthEllipsis = withMaybe(props => props.showEllipsis)(EllipsisButton);

    return (
      <div className="post-segment-panel" onClick={this.handlePanelClick}>
        <div className="voter-container">
          <VoterContainer
            upvotes={upvotes}
            voteDisplayState={voteDisplayState || 0}
            itemType={"post"}
            itemPk={pk}
          />
        </div>

        <div className="post-segment-text-container">
          <div className="post-segment-title">
            <Link
              className="post-title"
              to={"/r/" + subredditTitle + "/postDetail/" + pk}
            >
              {title}
            </Link>
          </div>

          <div className="post-segment-info">
            <strong>
              <Link to={`/r/${subredditTitle}`}>r/{subredditTitle}</Link>
            </strong>
            - posted by:
            <a href="#"> u/{posterUsername} </a>
            {created}
          </div>

          <div className="post-segment-links">
            <Link to={`/r/${subredditTitle}/postDetail/${pk}/comments`}>
              <Button bsSize="xsmall" className="post-buttons">
                Comments
              </Button>
            </Link>

            <ShareButton shareUrl={`${window.location}/postDetail/${pk}`} />

            <div className="post-segment-ellipsis-container">
              <AuthEllipsis showEllipsis={authUsername === posterUsername}>
                <MenuItem eventKey={1} onSelect={handleDeletePost}>
                  delete
                </MenuItem>

                <MenuItem eventKey={2} onSelect={this.handleShowEditPost}>
                  edit
                </MenuItem>
              </AuthEllipsis>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostPanel.propTypes = {
  upvotes: PropTypes.number,
  pk: PropTypes.number,
  title: PropTypes.string,
  subredditTitle: PropTypes.string,
  posterUsername: PropTypes.string,
  authUsername: PropTypes.string,
  created: PropTypes.string,
  voteDisplayState: PropTypes.number,
  handleDeletePost: PropTypes.func
};

export default withRouter(PostPanel);
