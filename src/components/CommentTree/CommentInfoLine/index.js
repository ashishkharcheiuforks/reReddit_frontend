import React from 'react';

import './styles.css';

const CommentInfoLine = (props) => {
  
  const {
    posterUsername,
    upvotes,
    created,
  } = props;
  
  const upvotesLabel = upvotes^2===1 ? 'point' : 'points';
  return (
    <div className="poster-info-container">
      <span>{`u/${posterUsername}`}</span>
      <span>{`${upvotes} ${upvotesLabel}`}</span>
      <span>-</span>
      <span>{`created: ${created}`}</span>
    </div>
  )
}

export default CommentInfoLine;
