import React from 'react';
import { IoIosAddCircle } from "react-icons/io";

import './styles.css';

const CollapsedTree = (props) => {
  const {
    posterPk,
    handleExpansion,
    upvotes,
  } = props;
  
  return (
    <div className="comment-tree-content collapsed-container">
      <div onClick={() => handleExpansion()} className="expander">
        <IoIosAddCircle />
      </div>
      <div className='collapsed-links'>
        This is collpased
      </div>
    </div>
  )
}

export default CollapsedTree;
