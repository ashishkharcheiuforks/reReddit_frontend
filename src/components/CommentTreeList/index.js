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
  
  let commentTreeRootList;
  if (loading)  {
    commentTreeRootList = <Loader />;
  } else {
    commentTreeRootList = (!Array.isArray(trees) || !trees.length)
      ? null
      : trees.map(root => (
        <CommentTree
          body={root.body}
          posterUsername={root.poster.username}
          commentChildren={root.children}
          upvotes={root.upvotes}
          created={root.created}
          key={root.pk}
        />
      )
      )
  }
  
  return (
    <div className='comment-tree-list-container'>
      <ul>
        {commentTreeRootList}
      </ul>
    </div>
  )
}

export default CommentTreeList;
