import React from 'react';
import { Panel } from 'react-bootstrap';

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
        <strong>{post.sub}</strong> - posted by: {post.poster}
      </div>
    </div>


  </Panel>
);

export default PostSegment;
