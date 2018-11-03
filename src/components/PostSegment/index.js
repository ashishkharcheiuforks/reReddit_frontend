import React from 'react';

import { Segment } from 'semantic-ui-react';
import './styles.css'

const PostSegment = (props) => (
  <Segment className="post-segment">{props.post.content}</Segment>
);

export default PostSegment;