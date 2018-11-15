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
        {post.body}
      </div>
      
      <div id='post-segment-info'>
        <strong>r/{post.subreddit_title}</strong> - posted by: {post.poster_username}
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
