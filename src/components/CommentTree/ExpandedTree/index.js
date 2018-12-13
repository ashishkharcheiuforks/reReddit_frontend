import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FaComment, FaArrowUp, FaArrowDown, } from 'react-icons/fa';

import './styles.css';
import CommentEditorContainer from '../../../containers/CommentEditorContainer';
import CommentInfoLine from '../CommentInfoLine';
import { withMaybe } from '../../../utilities/HOC';

class ExpandedTree extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      showEditor: false,
    }
    
    this.handleToggleEditor = this.handleToggleEditor.bind(this);
  }
  
  handleToggleEditor() {
    this.setState({
      showEditor: !this.state.showEditor,
    });
  }
  
  render() {
    
    const {
      childrenList,
      body,
      posterUsername,
      upvotes,
      created,
      pk,
      handleToggleCollapse:handleCollapse,
    } = this.props;
    
    const HideableEditor = withMaybe(
      (props) => props.showEditor
    )(CommentEditorContainer);
  
    return (
      <div className="comment-tree-content">
        <div className="comment-voter-collapser">
          <div className='comment-voter upvoter'>
            <span onClick={() => false}>
              <FaArrowUp />
            </span>
          </div>
          <div className='comment-voter downvoter'>
            <span onClick={() => false}>
              <FaArrowDown />
            </span>
          </div>
          <span onClick={() => handleCollapse()} className='thread-line-container'>
            <div className='thread-line'/>
          </span>
        </div>
        <div className="comment-panel">
          <CommentInfoLine {...{posterUsername, upvotes, created}}/>
          <div
            className="comment-body-container"
            dangerouslySetInnerHTML={{__html: body}}
            />
          <div className="comment-links">
            <div className="comment-icon">
              <FaComment/>
            </div>
            <Button
              bsSize='xsmall'
              className='comment-buttons'
              onClick={() => this.handleToggleEditor()}>
                Reply
            </Button>
            <Button bsSize='xsmall' className='comment-buttons'> Share </Button>
          </div>
          <HideableEditor
            showEditor={this.state.showEditor}
            rootComment={false}
            commentParentPk={pk}
          />
          <div className="children-container">
            {childrenList}
          </div>
        </div>
      </div>
    )
  }
}

export default ExpandedTree;
