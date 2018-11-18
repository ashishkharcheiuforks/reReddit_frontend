import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import { FaShare } from 'react-icons/fa';

import './styles.css'

const PostSegment = ({post}) => (
  <Panel id="post-segment-panel">
    <div id="post-segment-voter">
      
    </div>
    
    <div id='post-segment-text-container'>
      <div id="post-segment-title">
        {post.title}
      </div>
      
      <div id='post-segment-info'>
        <strong>
          <a href="/#">r/{post.subreddit_title}</a>
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
