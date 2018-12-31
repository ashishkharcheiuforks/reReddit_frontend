import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, MenuItem } from 'react-bootstrap';
import { FaShare } from 'react-icons/fa';
import { withRouter } from 'react-router';


import './styles.css';
import { PanelListLoader } from '../Loaders';
import PostInfoLine from './PostInfoLine';
import CommentTreeListContainer from '../../containers/CommentTreeListContainer';
import EllipsisButton from '../EllipsisButton';
import { withMaybe } from '../../utilities/HOC';

class PostDetail extends Component{
  constructor(props) {
    super(props)
    
    this.handleDelete = this.handleDelete.bind(this);
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
          ? <PanelListLoader/>
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
              <Button bsSize='xsmall' className='post-buttons'>
                <FaShare /> Share
              </Button>
              
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
            
            <div className="post-comments-container">
              <CommentTreeListContainer />
            </div>
            </Fragment>
        }

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
  handleDeletePost: PropTypes.func,
}

export default withRouter(PostDetail);
