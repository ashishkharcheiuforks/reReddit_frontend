import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, MenuItem, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaShare } from 'react-icons/fa';
import { withRouter } from 'react-router';


import './styles.css';
import { PanelListLoader, BlockLoader } from '../Loaders';
import PostInfoLine from './PostInfoLine';
import CommentTreeListContainer from '../../containers/CommentTreeListContainer';
import EllipsisButton from '../EllipsisButton';
import { withMaybe } from '../../utilities/HOC';

class PostDetail extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      showCopyTooltip: false,
    }
    
    this.commentListNode = React.createRef()
    this.copyNode = React.createRef();
    
    this.handleDelete = this.handleDelete.bind(this);
    
    this.copyTooltip = (
      <Tooltip id="copy-tooltip" a>
        <stong>Copied Link</stong>
      </Tooltip>
    );
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
  
  copyToClipboard = (e) => {
    this.copyNode.current.select();
    document.execCommand("copy");
    
    this.toggleCopied();
    setTimeout(this.toggleCopied, 4000);
  }
  
  toggleCopied = () => {
    this.setState({showCopyTooltip: !this.state.copied})
  }
  
  async handleDelete() {
    // Make sure the post is actually deleted before rerouting which
    // causes the list to reload
    await this.props.handleDeletePost();
    this.props.history.replace(`/r/${this.props.subredditTitle}`);
  }
  
  render () {
    const {
      subredditTitle,
      posterUsername,
      authUsername,
      title,
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
              <div
                className='body-html'
                dangerouslySetInnerHTML={{__html: body}}
              />
            </div>
            
            <div className='link-bar-container'>
              <OverlayTrigger
                placement="bottom"
                overlay={this.copyTooltip}
                trigger='focus'
                delayHide={4000}
              >
                <Button
                  bsSize='xsmall'
                  className='post-buttons'
                  onClick={this.copyToClipboard}
                >
                  <FaShare /> Share
                </Button>
              </OverlayTrigger>

              <form>
                <input
                  id="hidden-copy-input"
                  readOnly
                  ref={this.copyNode}
                  value={`${window.location.href}`}
                  aria-hidden="true"/>
              </form>
              
              <AuthEllipsis
                showEllipsis={authUsername===posterUsername}
              >
                <MenuItem
                  eventKey={1}
                  onSelect={this.handleDelete}
                >
                  delete
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
