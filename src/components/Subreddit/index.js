import React from 'react';

import PostListContainer from '../../containers/PostListContainer';
import SideBar from '../SideBar';
import './styles.css';

const Subreddit = (props) => {
  
  const {
    title,
  } = props;
  return (
    <div className='subreddit-container'>
      <div className='postlist-container'>
        <ul>
          <PostListContainer {...props} />
        </ul>
      </div>
      <div className='sidebar-container'>
        <SideBar title={title} />
      </div>
    </div>
  )
}

export default Subreddit;
