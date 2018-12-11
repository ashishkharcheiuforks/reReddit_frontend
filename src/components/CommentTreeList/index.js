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
          posterUsername={tree.poster.username}
          commentChildren={tree.children}
          upvotes={tree.upvotes}
          created={tree.created}
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
