import React, { Component, Fragment } from 'react';
import { Button} from 'react-bootstrap';
import { FaComment} from 'react-icons/fa';
import { compose } from 'recompose';

import './styles.css';
import CommentEditorContainer from '../../../containers/CommentEditorContainer';
import CommentInfoLine from '../CommentInfoLine';
import CommentBody from '../CommentBody';
import VoterContainer from '../../../containers/VoterContainer';
import { withMaybe, withEither } from '../../../utilities/HOC';


class ExpandedComment extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      showReplyEditor: false,
      showUpdateEditor: false,
    }
    
    this.handleToggleReplyEditor = this.handleToggleReplyEditor.bind(this);
    this.handleToggleUpdateEditor = this.handleToggleUpdateEditor.bind(this);
  }
  
  handleToggleReplyEditor() {
    this.setState({
      showReplyEditor: !this.state.showReplyEditor,
    });
  }
  
  handleToggleUpdateEditor() {
    this.setState({
      showUpdateEditor: !this.state.showUpdateEditor,
    })
  }
  
  render() {
    
    const {
      childrenList,
      body,
      posterUsername,
      authUsername,
      upvotes,
      created,
      pk,
      voteDisplayState,
      deleted,
      handleToggleCollapse:handleCollapse,
      handleDeleteComment,
    } = this.props;
    
    const ReplyEditorWithHide = withMaybe(
      (props) => props.showEditor
    )(CommentEditorContainer);
    
    const CommentBodyWithDeleteAndUpdateEditor = compose(
      withMaybe((props) => !props.deleted),
      withEither((props) => props.showUpdateEditor, CommentEditorContainer)
    )(CommentBody);
  
    return (
      <div className="comment-tree-content">
        <div className="comment-voter-collapser">
          {deleted ||
            <VoterContainer
              voteDisplayState={voteDisplayState}
              itemType={'comment'}
              itemPk={pk}
            />
          }
          <span onClick={() => handleCollapse()} className='thread-line-container'>
            <div className='thread-line'/>
          </span>
        </div>
        <div className="comment-panel">
          <div className='comment-info-line-container'>
            <CommentInfoLine {...{posterUsername, upvotes, created, deleted}}/>
          </div>
          
          <CommentBodyWithDeleteAndUpdateEditor
            {...{
              body,
              posterUsername,
              authUsername,
              pk,
              deleted,
              handleDeleteComment,
            }}
            showUpdateEditor={this.state.showUpdateEditor}
            handleToggleReplyEditor={this.handleToggleReplyEditor}
            handleToggleUpdateEditor={this.handleToggleUpdateEditor}
          />
          
          <ReplyEditorWithHide
            showEditor={this.state.showReplyEditor}
            rootComment={false}
            commentParentPk={pk}
            usage='create'
          />
          <div className="children-container">
            {childrenList}
          </div>
        </div>
      </div>
    )
  }
}

export default ExpandedComment;
