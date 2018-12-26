import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

import CommentInfoLine from '../CommentInfoLine';
import './styles.css';

const CollapsedComment = (props) => {
  const {
    posterUsername,
    upvotes,
    created,
    handleToggleCollapse:handleExpansion,
  } = props;
  
  return (
    <div className="comment-tree-content collapsed-container">
      <div onClick={() => handleExpansion()} className="expander">
        <IoIosAddCircle />
      </div>
      <div className='collapsed-links'>
        <CommentInfoLine {...{posterUsername, upvotes, created,}}/>
      </div>
    </div>
  )
}

export default CollapsedComment;
