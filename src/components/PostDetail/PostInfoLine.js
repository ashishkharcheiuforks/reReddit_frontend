import React from 'react';

import { Link } from 'react-router-dom';
import './styles.css';

const PostInfoLine = ({title, poster}) => (
  <div className='post-info-line'>
    <div className='link-to-sub'>
      <Link to={`/r/${title}`}>
        {`r/${title}`}
      </Link>
    </div>
    <span id='divider'>-</span>
    <div className='link-to-user'>
      <Link to={`/u/${poster}`}>
        {`Posted by u/${poster}`}
      </Link>
    </div>
  </div>
)

export default PostInfoLine;
