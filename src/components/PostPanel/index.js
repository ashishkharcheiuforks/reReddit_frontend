import React from 'react';
import PropTypes from 'prop-types'
import { Panel, Button, MenuItem } from 'react-bootstrap';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import VoterContainer from '../../containers/VoterContainer';
import EllipsisButton from '../EllipsisButton';
import { withMaybe } from '../../utilities/HOC';
import './styles.css';


const PostPanel = (props) => {
  
  const {
    upvotes,
    pk,
    title,
    subredditTitle,
    posterUsername,
    authUsername,
    created,
    voteDisplayState,
    handleDeletePost,
  } = props;
  
  const AuthEllipsis = withMaybe(
    (props) => props.showEllipsis
  )(EllipsisButton);

  return (
    <div className="post-segment-panel" >
        <VoterContainer
          upvotes={upvotes}
          voteDisplayState={voteDisplayState || 0}
          itemType={'post'}
          itemPk={pk}
        />

      
      <div className='post-segment-text-container'>
        <div className="post-segment-title">
          <Link to={"/r/" + subredditTitle + "/postDetail/" + pk}>
            {title}
          </Link>
        </div>
        
        <div className='post-segment-info'>
          <strong>
            <Link to={"/r/" + subredditTitle}>
              r/{subredditTitle}
            </Link>
          </strong>
          - posted by:
          <a href="/#"> u/{posterUsername} </a>
          {created}
        </div>
        
        <div className='post-segment-links'>
          <Button bsSize='xsmall' className='post-buttons'> X Comments </Button>
          <Button bsSize='xsmall' className='post-buttons'>
             <FaShare /> Share
           </Button>
          <Button bsSize='xsmall' className='post-buttons'> Save </Button>
          <AuthEllipsis
            showEllipsis={authUsername === posterUsername}
          >
            <MenuItem
              eventKey={1}
              onSelect={handleDeletePost}
            >
              delete
            </MenuItem>
          </AuthEllipsis>
        </div>
      </div>


    </div>
  );
}

PostPanel.propTypes = {
  upvotes: PropTypes.number,
  pk: PropTypes.number,
  title: PropTypes.string,
  subredditTitle: PropTypes.string,
  posterUsername: PropTypes.string,
  authUsername: PropTypes.string,
  created: PropTypes.string,
  voteDisplayState: PropTypes.number,
  handleDeletePost: PropTypes.func,
}

export default PostPanel;
