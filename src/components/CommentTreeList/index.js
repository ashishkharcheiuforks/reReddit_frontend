import React from 'react';

import Loader from '../ListLoader';
import { ErrorAlert } from '../AlertMessage';
import CommentTree from '../CommentTree';

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
    treeList = (!Array.isArray(trees) || !trees.length)
      ? null
      : trees.map(tree => (
        <CommentTree
          body={tree.body}
          posterPk={tree.pk}
          commentChildren={tree.children}
          key={tree.pk}
        />
      )
      )
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
