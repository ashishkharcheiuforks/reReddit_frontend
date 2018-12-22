import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import VoterContainer from '../../containers/VoterContainer';
import './styles.css';


const PostPanel = (props) => {
  const {
    upvotes,
    pk,
    title,
    subreddit_title,
    poster_username,
    created,
    voteDisplayState,
  } = props
  return (
    <div className="post-segment-panel">
        <VoterContainer
          upvotes={upvotes}
          voteDisplayState={voteDisplayState || 0}
          itemType={'post'}
          itemPk={pk}
        />

      
      <div className='post-segment-text-container'>
        <div className="post-segment-title">
          <Link to={"/r/" + subreddit_title + "/postDetail/" + pk}>
            {title}
          </Link>
        </div>
        
        <div className='post-segment-info'>
          <strong>
            <Link to={"/r/" + subreddit_title}>
              r/{subreddit_title}
            </Link>
          </strong>
          - posted by:
          <a href="/#"> u/{poster_username} </a>
          {created}
        </div>
        
        <div className='post-segment-links'>
          <Button bsSize='xsmall' className='post-buttons'> X Comments </Button>
          <Button bsSize='xsmall' className='post-buttons'>
             <FaShare /> Share
           </Button>
          <Button bsSize='xsmall' className='post-buttons'> Save </Button>
        </div>
      </div>


    </div>
  );
}

export default PostPanel;
