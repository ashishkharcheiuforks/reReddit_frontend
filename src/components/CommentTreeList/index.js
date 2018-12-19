import React from 'react';

import Loader from '../ListLoader';
import { ErrorAlert } from '../AlertMessage';
import CommentTree from '../CommentTree';
import CommentContainer from '../../containers/CommentContainer';
import CommentEditorContainer from '../../containers/CommentEditorContainer';
import { withMaybe } from '../../utilities/HOC';

const CommentTreeList = (props) => {
  const {
    rootComments,
    error,
    loading,
    createCommentError,
    createCommentLoading,
    createdComment,
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
    commentTreeRootList = (!Array.isArray(rootComments) || !rootComments.length)
      ? []
      : rootComments.map(root => (
        <CommentTree
          body={root.body}
          posterPk={root.poster}
          commentChildren={root.children}
          upvotes={root.upvotes}
          created={root.created}
          pk={root.pk}
          voteDisplayState={root.vote_state}
          createdComment={createdComment}
          key={root.pk}
        />
      ))
      
    // If we just now created a new root comment put that on the top of the list
    // createdComment will be set to false after the list is refetched
    // we only want this to happen with root comments (i.e. those made on
    // posts).
    if (createdComment && createdComment.post) {
      const newCommentTree = (
        <CommentTree
          body={createdComment.body}
          posterUsername={createdComment.poster}
          commentChildren={[]}
          upvotes={createdComment.upvotes}
          created={" just now"}
          pk={createdComment.pk}
          key={createdComment.pk}
        />
      );
      commentTreeRootList.unshift(newCommentTree);
    }
  }

  // Error with root comment creation
  const AlertOnError = withMaybe((props) =>
    props.children)(ErrorAlert)
  
  return (
    <div className='comment-tree-list-container'>
      <AlertOnError children={createCommentError} />
      <div className='top-comment-editor'>
        <CommentEditorContainer rootComment={true}/>
      </div>

      <ul>
        {commentTreeRootList}
      </ul>
    </div>
  )
}

export default CommentTreeList;
