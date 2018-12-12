import React from 'react';

import './styles.css';

const CommentInfoLine = (props) => {
  
  const {
    posterUsername,
    upvotes,
    created,
  } = props;
  
  return (
    <div className="poster-info-container">
      <span>{`u/${posterUsername}`}</span>
      <span>{`${upvotes} upvotes`}</span>
      <span>-</span>
      <span>{`created: ${created}`}</span>
    </div>
  )
}

export default CommentInfoLine;
