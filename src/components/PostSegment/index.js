import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css'

const PostSegment = ({post}) => (
  <Panel id="post-segment-panel">
    <div id="post-segment-voter">
      
    </div>
    
    <div id='post-segment-text-container'>
      <div id="post-segment-title">
        <Link to={"/r/" + post.subreddit_title + "/postDetail/" + post.id}>
          {post.title}
        </Link>
      </div>
      
      <div id='post-segment-info'>
        <strong>
          <Link to={"/r/" + post.subreddit_title}>
            r/{post.subreddit_title}
          </Link>
        </strong>
        - posted by:
        <a href="/#"> u/{post.poster_username} </a>
        {post.age_in_days} days ago
      </div>
      
      <div id='post-segment-links'>
        <Button bsSize='xsmall' className='post-buttons'> X Comments </Button>
        <Button bsSize='xsmall' className='post-buttons'>
           <FaShare /> Share
         </Button>
        <Button bsSize='xsmall' className='post-buttons'> Save </Button>
      </div>
    </div>


  </Panel>
);

export default PostSegment;
