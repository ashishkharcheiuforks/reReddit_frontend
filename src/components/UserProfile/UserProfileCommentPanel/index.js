import React from "react";
import PropTypes from "prop-types";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  POST_DETAIL_URL,
  USER_PROFILE_URL,
  SUBREDDIT_URL
} from "../../../urls";
import "./styles.css";

const UserProfileCommentPanel = props => {
  const { commentList, postInfo, username } = props;

  const comments = commentList.map(comment => (
    <div className="up-comment-panel" key={comment.pk}>
      {comment.body}
    </div>
  ));

  return (
    <div className="up-comment-post-panel">
      <div className="up-post-panel">
        <FaRegCommentAlt className="up-comment-icon" />
        <span className="up-postline-username">{username}</span>
        <span className="up-commented-on">commented on</span>
        {postInfo.title}
        <span className="up-postline-dot">{"\u00b7"}</span>
        <Link
          className="up-postline-subreddit-link"
          to={SUBREDDIT_URL(postInfo.subreddit_title)}
        >
          r/{postInfo.subreddit_title}
        </Link>
        <span className="up-postline-dot">{"\u00b7"}</span>
        <span className="up-postline-posted-by">
          Posted by:
          <Link
            className="up-postline-username-link"
            to={USER_PROFILE_URL(postInfo.poster_username)}
          >
            u/{postInfo.poster_username}
          </Link>
        </span>
      </div>
      {comments}
    </div>
  );
};

UserProfileCommentPanel.propTypes = {
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      post: PropTypes.number,
      poster: PropTypes.number,
      parent: PropTypes.number,
      body: PropTypes.string,
      upvotes: PropTypes.number,
      pk: PropTypes.number,
      vote_state: PropTypes.number,
      deleted: PropTypes.bool,
      created: PropTypes.string
    })
  ),
  postInfo: PropTypes.shape({
    poster: PropTypes.number,
    created: PropTypes.string,
    updated: PropTypes.string,
    parent: PropTypes.number,
    body: PropTypes.string,
    title: PropTypes.string,
    upvotes: PropTypes.number,
    subreddit: PropTypes.number,
    subreddit_title: PropTypes.string,
    poster_username: PropTypes.string,
    pk: PropTypes.number,
    vote_state: PropTypes.number
  }),
  username: PropTypes.string
};
export default UserProfileCommentPanel;
