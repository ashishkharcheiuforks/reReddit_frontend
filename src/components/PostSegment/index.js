import React from 'react';
import { Panel } from 'react-bootstrap';

import './styles.css'

const PostSegment = ({post}) => (
  <Panel id="post-segment-panel">
    <Panel.Body>{post.body}</Panel.Body>
  </Panel>
);

export default PostSegment;