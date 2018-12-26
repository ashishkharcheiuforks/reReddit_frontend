import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const CommentInfoLine = (props) => {
  
  const {
    posterUsername,
    upvotes,
    created,
    deleted,
  } = props;
  
  const upvotesLabel = upvotes^2===1 ? 'point' : 'points';
  const username = deleted
    ? "comment deleted"
    : <Link to={"/"}>
        {`u/${posterUsername}`}
      </Link>;
      
  return (
    <div className="poster-info-container">
      <span>{username}</span>
      <span>{deleted || `${upvotes} ${upvotesLabel}`}</span>
      <span>-</span>
      <span>{`created: ${created}`}</span>
    </div>
  )
}

export default CommentInfoLine;
