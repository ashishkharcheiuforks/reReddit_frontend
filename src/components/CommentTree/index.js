import React from 'react';
import { Button } from 'react-bootstrap';
import { FaComment, FaArrowUp, FaArrowDown, } from 'react-icons/fa';

import './styles.css';

const CommentTree = (props) => {
  const {
    body,
    posterPk,
    commentChildren,
  } = props;
  
  const children = (!Array.isArray(commentChildren) || !commentChildren.length)
    ? null
    : commentChildren.map(comment => (
      <CommentTree
        body={comment.body}
        posterPk={comment.pk}
        commentChildren={comment.children}
        key={comment.pk}
      />
    )
    )
    
  return (
    <div className="comment-tree-content">
      <div className="comment-voter-collapser">
        <div className='comment-voter'>
          <FaArrowUp />
          <br/>
          <FaArrowDown />
        </div>
        <div className='comment-thread-line'/>
      </div>
      <div className="comment-panel">
        <div className="poster-info-container">
          {posterPk} upvotes  -  age
        </div>
        <div className="comment-body-container">
          {body}
        </div>
        <div className="comment-links">
          <div className="comment-icon">
            <FaComment/>
          </div>
          <Button bsSize='xsmall' className='comment-buttons'> Reply </Button>
          <Button bsSize='xsmall' className='comment-buttons'> Share </Button>
        </div>
        <div className="children-container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default CommentTree;
