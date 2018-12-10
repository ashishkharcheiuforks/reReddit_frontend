import React from 'react';

import Loader from '../ListLoader';
import { ErrorAlert } from '../AlertMessage';

const CommentTreeList = (props) => {
  const {
    trees,
    error,
    loading,
  } = props;
  
  if (error) {
    return (
      <ErrorAlert>
        {error}
      </ErrorAlert>
    )
  }
  
  let treeList;
  if (loading)  {
    treeList = <Loader />;
  } else {
    treeList = trees && trees.map(tree => <p>{tree.pk}</p>)
  }
  
  return (
    <div className='comment-tree-list-container'>
      <ul>
        {treeList}
      </ul>
    </div>
  )
}

export default CommentTreeList;
