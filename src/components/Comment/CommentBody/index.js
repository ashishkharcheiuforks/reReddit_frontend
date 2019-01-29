import React, { Component, Fragment } from "react";
import { FaComment } from "react-icons/fa";
import { Button, MenuItem } from "react-bootstrap";
import PropTypes from "prop-types";

import EllipsisButton from "../../EllipsisButton";
import { withMaybe } from "../../../utilities/HOC";
import "./styles.css";

class CommentBody extends Component {
  render() {
    const {
      body,
      posterUsername,
      authUsername,
      pk,
      handleDeleteComment,
      handleToggleReplyEditor,
      handleToggleUpdateEditor
    } = this.props;

    const AuthEllipsis = withMaybe(
      props => props.authUsername === props.posterUsername
    )(EllipsisButton);

    return (
      <Fragment>
        <div
          className="comment-body-container"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <div className="comment-links">
          <div className="comment-icon-and-button">
            <div className="comment-icon">
              <FaComment />
            </div>
            <Button
              bsSize="xsmall"
              className="comment-buttons"
              onClick={handleToggleReplyEditor}
            >
              Reply
            </Button>
          </div>
          <AuthEllipsis
            {...{
              authUsername,
              posterUsername
            }}
          >
            <MenuItem eventKey={2} onSelect={handleToggleUpdateEditor}>
              edit
            </MenuItem>
            <MenuItem eventKey={1} onSelect={handleDeleteComment}>
              delete
            </MenuItem>
          </AuthEllipsis>
        </div>
      </Fragment>
    );
  }
}

CommentBody.propTypes = {
  body: PropTypes.string,
  posterUsername: PropTypes.string,
  authUsername: PropTypes.string,
  pk: PropTypes.number,
  handleDeleteComment: PropTypes.func,
  handleToggleReplyEditor: PropTypes.func,
  handleToggleUpdateEditor: PropTypes.func
};

export default CommentBody;
