import React from 'react';

import Loader from '../ListLoader';
import { ErrorAlert } from '../AlertMessage';
import CommentTree from '../CommentTree';
import CommentEditor from '../CommentEditor';
import { withMaybe } from '../../utilities/HOC';

const CommentTreeList = (props) => {
  const {
    trees,
    error,
    loading,
    handleCreateComment,
    createCommentError,
    createCommentLoading,
    createdComment,
    postPk,
  } = props;
  
  if (error) {
    return (
      <ErrorAlert>
        {error}
      </ErrorAlert>
    )
  }
  
  let commentTreeRootList = [];
  if (loading)  {
    commentTreeRootList = <Loader />;
  } else {
    commentTreeRootList = (!Array.isArray(trees) || !trees.length)
      ? []
      : trees.map(root => (
        <CommentTree
          body={root.body}
          posterUsername={root.poster.username}
          commentChildren={root.children}
          upvotes={root.upvotes}
          created={root.created}
          key={root.pk}
        />
      ))
      
    // If we just created a new comment put that on the top of the list
    // createdComment will be set to false after the list is refetched
    if (createdComment) {
      const newCommentTree = (
        <CommentTree
          body={createdComment.body}
          posterUsername={createdComment.poster}
          commentChildren={null}
          upvotes={createdComment.upvotes}
          created={" just now"}
          key={createdComment.pk}
        />
      );
      commentTreeRootList.unshift(newCommentTree);
    }
  }
  
  
  const AlertOnError = withMaybe((props) =>
    props.children)(ErrorAlert)
  
  return (
    <div className='comment-tree-list-container'>
      <AlertOnError children={createCommentError} />
      <div className='top-comment-editor'>
        <CommentEditor {...{postPk, handleCreateComment}}/>
      </div>

      <ul>
        {commentTreeRootList}
      </ul>
    </div>
  )
}

export default CommentTreeList;
