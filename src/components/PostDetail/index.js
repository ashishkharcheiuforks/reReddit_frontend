import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, MenuItem } from 'react-bootstrap';
import { FaShare } from 'react-icons/fa';

import './styles.css';
import { PanelListLoader } from '../Loaders';
import PostInfoLine from './PostInfoLine';
import CommentTreeListContainer from '../../containers/CommentTreeListContainer';
import EllipsisButton from '../EllipsisButton';
import { withMaybe } from '../../utilities/HOC';

const PostDetail = (props) => {
  
  const {
    title: subredditTitle,
    posterUsername,
    authUsername,
    postTitle,
    postBody,
    loading,
    handleDeletePost,
  } = props;
  
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
            {postTitle}
          </div>
          <div className='post-body-container'>
            <div
              className='body-html'
              dangerouslySetInnerHTML={{__html: postBody}}
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
                onSelect={handleDeletePost}
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

PostDetail.propTypes = {
  title: PropTypes.string,
  posterUsername: PropTypes.string,
  authUsername: PropTypes.string,
  postTitle: PropTypes.string,
  postBody: PropTypes.string,
  loading: PropTypes.bool,
  handleDeletePost: PropTypes.func,
}

export default PostDetail;
