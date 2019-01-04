import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, MenuItem, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaShare } from 'react-icons/fa';
import { withRouter } from 'react-router';


import './styles.css';
import { PanelListLoader, BlockLoader } from '../Loaders';
import PostInfoLine from './PostInfoLine';
import PostEditorContainer from '../../containers/PostEditorContainer';
import CommentTreeListContainer from '../../containers/CommentTreeListContainer';
import EllipsisButton from '../EllipsisButton';
import ShareButton from '../ShareButton';
import { withMaybe } from '../../utilities/HOC';

class PostDetail extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      postEditMode: props.postEditMode ? true : true,
    };
    
    this.commentListNode = React.createRef()
    
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  componentDidMount() {
    if (this.props.commentScroll) {
      this.scrollToCommentList();
    } else {
      window.scrollTo(0,0);
    }
  }
  
  // Only scroll to comments when first navigating to page
  componentDidUpdate(prevProps) {
    if (this.props.commentScroll && (prevProps.pk !== this.props.pk)) {
      this.scrollToCommentList();
    }
  }
  
  scrollToCommentList = () => {
    window.scrollTo({
      top: this.commentListNode.current.offsetTop,
      behavior: "smooth",
    })
  }
  
  async handleDelete() {
    // Make sure the post is actually deleted before rerouting which
    // causes the list to reload
    await this.props.handleDeletePost();
    this.props.history.replace(`/r/${this.props.subredditTitle}`);
  }
  
  postEditModeToggle = () => {
    this.setState({ postEditMode: !this.state.postEditMode});
  }
  
  render () {
    const {
      subredditTitle,
      posterUsername,
      authUsername,
      title,
      pk,
      body,
      loading,
      handleDeletePost,
    } = this.props;
    
    const AuthEllipsis = withMaybe(
      (props) => props.showEllipsis
    )(EllipsisButton);
    
    return (
      <div className='post-detail-content'>
        {loading
          ? <BlockLoader/>
          :
            <Fragment>
            <PostInfoLine title={subredditTitle} poster={posterUsername} />
            <div className='post-title-container'>
              {title}
            </div>
            <div className='post-body-container'>
              {this.state.postEditMode
                ? (
                  <PostEditorContainer
                    {...{body, pk,}}
                    onEditorSubmit={this.postEditModeToggle}
                  />
                )
                : (
                  <div
                    className='body-html'
                    dangerouslySetInnerHTML={{__html: body}}
                  />
                )
              }
            </div>
            
            <div className='link-bar-container'>
              <ShareButton shareUrl={`${window.location.href}`} />
              
              <AuthEllipsis
                showEllipsis={authUsername===posterUsername}
              >
                <MenuItem
                  eventKey={1}
                  onSelect={this.handleDelete}
                >
                  delete
                </MenuItem>
                <MenuItem
                  eventKey={2}
                  onSelect={this.postEditModeToggle}
                >
                  edit
                </MenuItem>
                
              </AuthEllipsis>
              
            </div>
            </Fragment>
          }
          
          <div className="post-comments-container" ref={this.commentListNode}>
            <CommentTreeListContainer />
          </div>

      </div>
    )
  }
}

PostDetail.propTypes = {
  title: PropTypes.string,
  posterUsername: PropTypes.string,
  authUsername: PropTypes.string,
  postTitle: PropTypes.string,
  postBody: PropTypes.string,
  loading: PropTypes.bool,
  commentScroll: PropTypes.bool,
  handleDeletePost: PropTypes.func,
}

export default withRouter(PostDetail);
