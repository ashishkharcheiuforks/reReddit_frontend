import React from 'react';

import PostListContainer from '../../containers/PostListContainer';
import SideBar from '../SideBar';
import './styles.css';

const Subreddit = (props) => {
  
  return (
    <div className='subreddit-container'>
      <div className='postlist-container'>
        <ul>
          <PostListContainer {...props} />
        </ul>
      </div>
      <div className='sidebar-container'>
        <SideBar title={props.title} />
      </div>
    </div>
  )
}

export default Subreddit;
