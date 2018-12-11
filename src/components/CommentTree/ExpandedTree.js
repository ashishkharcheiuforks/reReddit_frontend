import React from 'react';
import { Button } from 'react-bootstrap';
import { FaComment, FaArrowUp, FaArrowDown, } from 'react-icons/fa';

import './styles.css';

const ExpandedTree = (props) => {
  
  const {
    body,
    posterPk,
    childrenList,
    handleCollapse
  } = props;
  
  return (
    <div className="comment-tree-content">
      <div className="comment-voter-collapser">
        <div className='comment-voter upvoter'>
          <span onClick={() => false}>
            <FaArrowUp />
          </span>
        </div>
        <div className='comment-voter downvoter'>
          <span onClick={() => false}>
            <FaArrowDown />
          </span>
        </div>
        <span onClick={() => handleCollapse()} className='thread-line-container'>
          <div className='thread-line'/>
        </span>
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
          {childrenList}
        </div>
      </div>
    </div>
  )
}

export default ExpandedTree;
