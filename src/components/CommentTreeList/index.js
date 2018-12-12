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
    postPk,
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
