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
    } = this.props
    
    const childrenList = (!Array.isArray(commentChildren) || !commentChildren.length)
      ? null
      : commentChildren.map(child => (
          <CommentTree
            commentChildren={child.children}
            body={child.body}
            posterUsername={child.poster.username}
            upvotes={child.upvotes}
            created={child.created}
            key={child.pk}
          />
        )
      )
      
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
          handleToggleCollapse={this.handleToggleCollapse}
          collapsed={this.state.collapsed}
        />
      </Fragment>
    )
  }
}

export default CommentTree;
