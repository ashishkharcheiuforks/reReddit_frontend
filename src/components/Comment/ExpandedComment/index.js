import React, { Component, Fragment } from 'react';
import { Button, MenuItem } from 'react-bootstrap';
import { FaComment, FaEllipsisH } from 'react-icons/fa';

import './styles.css';
import CommentEditorContainer from '../../../containers/CommentEditorContainer';
import CommentInfoLine from '../CommentInfoLine';
import EllipsisButton from '../../EllipsisButton';
import VoterContainer from '../../../containers/VoterContainer';
import { withMaybe } from '../../../utilities/HOC';


class ExpandedComment extends Component {
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
      authUsername,
      upvotes,
      created,
      pk,
      voteDisplayState,
      deleted,
      handleToggleCollapse:handleCollapse,
      handleDeleteComment,
    } = this.props;
    
    const HideableEditor = withMaybe(
      (props) => props.showEditor
    )(CommentEditorContainer);
    
    const AuthEllipsis = withMaybe(
      (props) => props.authUsername === props.posterUsername
    )(EllipsisButton)
  
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
          <CommentInfoLine {...{posterUsername, upvotes, created, deleted}}/>
          
          { deleted ||
            <Fragment>
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
                <Button bsSize='xsmall' className='comment-buttons'>
                  Share
                </Button>
                <AuthEllipsis
                  {...{
                    authUsername,
                    posterUsername,
                    handleDeleteComment,
                  }}
                >
                  <MenuItem
                    eventKey={1}
                    onSelect={handleDeleteComment}
                  >
                    delete
                  </MenuItem>
                </AuthEllipsis>
              </div>
            </Fragment>
          }
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

export default ExpandedComment;
