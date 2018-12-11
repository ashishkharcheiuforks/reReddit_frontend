import React, { Component } from 'react';

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
    
    this.handleCollapseToggle = this.handleCollapseToggle.bind(this);
  }
  
  handleCollapseToggle() {
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
    } = this.props
    
    const childrenList = (!Array.isArray(commentChildren) || !commentChildren.length)
      ? null
      : commentChildren.map(comment => (
          <CommentTree
            commentChildren={comment.children}
            body={comment.body}
            posterUsername={comment.poster.username}
            upvotes={comment.upvotes}
            created={comment.created}
            key={comment.pk}
          />
        )
      )
      
    const CollapsibleTree = withEither(
      (props) => props.collapsed,
      CollapsedTree
    )(ExpandedTree);
        
    return (
      <CollapsibleTree
        childrenList={childrenList}
        body={body}
        posterUsername={posterUsername}
        upvotes={upvotes}
        created={created}
        handleToggleCollapse={this.handleCollapseToggle}
        collapsed={this.state.collapsed}
      />
    )
  }
}

export default CommentTree;
