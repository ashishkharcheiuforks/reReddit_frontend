import React, { Component, Fragment } from 'react';

import './styles.css';
import ExpandedTree from './ExpandedTree';
import CollapsedTree from './CollapsedTree';
import { withEither } from '../../utilities/HOC';


class CommentTree extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      collapsed: false,
    }
    
    this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
  }
  
  handleToggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
    
  render() {
    
    const {
      commentChildren,
      body,
      posterUsername,
      upvotes,
      created,
      pk,
      createdComment,
      handleCommentVote,
    } = this.props
    
    let childrenList = [];
    if (Array.isArray(commentChildren) && commentChildren.length) {
      childrenList =
        commentChildren.map(child => (
            <CommentTree
              commentChildren={child.children}
              body={child.body}
              posterUsername={child.poster.username}
              upvotes={child.upvotes}
              created={child.created}
              pk={child.pk}
              handleCommentVote={handleCommentVote}
              key={child.pk}
            />
        ))
        
      // If the newly created comment is a child of this comment
      // we want it to be posted at the top of the list
      // the createdComment prop will become null when the
      // list of comment trees is fetched again
      if (createdComment && createdComment.parent) {
        const newCommentTree = (
          <CommentTree
            body={createdComment.body}
            posterUsername={createdComment.poster}
            commentChildren={null}
            upvotes={createdComment.upvotes}
            created={" just now"}
            pk={createdComment.pk}
            handleCommentVote={handleCommentVote}
            key={createdComment.pk}
          />
        )
        childrenList.unshift(newCommentTree);
      }
    }
      
    const CollapsibleTree = withEither(
      (props) => props.collapsed,
      CollapsedTree
    )(ExpandedTree);
        
    return (
      <Fragment>
        <CollapsibleTree
          childrenList={childrenList}
          body={body}
          posterUsername={posterUsername}
          upvotes={upvotes}
          created={created}
          pk={pk}
          handleToggleCollapse={this.handleToggleCollapse}
          handleCommentVote={handleCommentVote}
          collapsed={this.state.collapsed}
        />
      </Fragment>
    )
  }
}

export default CommentTree;
