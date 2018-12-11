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
      posterPk,
    } = this.props
    
    const childrenList = (!Array.isArray(commentChildren) || !commentChildren.length)
      ? null
      : commentChildren.map(comment => (
          <CommentTree
            body={comment.body}
            posterPk={comment.pk}
            commentChildren={comment.children}
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
        body={body}
        posterPk={posterPk}
        childrenList={childrenList}
        handleCollapse={this.handleCollapseToggle}
        handleExpansion={this.handleCollapseToggle}
        collapsed={this.state.collapsed}
      />
    )
  }
}

export default CommentTree;
