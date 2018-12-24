import React, { Component, Fragment } from 'react';

import './styles.css';
import ExpandedTree from './ExpandedTree';
import CollapsedTree from './CollapsedTree';
import { withEither } from '../../utilities/HOC';
import CommentContainer from '../../containers/CommentContainer';


class Comment extends Component {
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
      childrenPk,
      body,
      upvotes,
      created,
      pk,
      voteDisplayState,
      posterUsername,
      authUsername,
    } = this.props
    debugger;
    let childrenList = [];
    if (Array.isArray(childrenPk) && childrenPk.length) {
      childrenList =
        childrenPk.map(childPk => (
            <CommentContainer
              pk={childPk}
              key={childPk}
            />
        ))
      }
      
    const CollapsibleTree = withEither(
      (props) => props.collapsed,
      CollapsedTree
    )(ExpandedTree);
        
    return (
      <CollapsibleTree
        childrenList={childrenList}
        body={body}
        posterUsername={posterUsername}
        authUsername={authUsername}
        upvotes={upvotes}
        created={created}
        pk={pk}
        voteDisplayState={voteDisplayState}
        handleToggleCollapse={this.handleToggleCollapse}
        collapsed={this.state.collapsed}
      />
    )
  }
}

export default Comment;
