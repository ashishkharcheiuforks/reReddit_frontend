import React from 'react';

import PostListContainer from '../../containers/PostListContainer';
import SideBar from '../SideBar';
import './styles.css';

const Subreddit = (props) => {
  
  return (
    <div className='subreddit-container'>
      <div className='postlist-container'>
          <PostListContainer {...props} />
      </div>
      <div className='sidebar-container'>
        <SideBar {...props} />
      </div>
    </div>
  )
}

export default Subreddit;
