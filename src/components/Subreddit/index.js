import React from 'react';

import PostListContainer from '../../containers/PostListContainer';
import SideBar from '../SideBar';
import './styles.css';

const Subreddit = (props) => {
  const skinnyContainer = props.match.params.createPost === 'createPost'
    ? 'skinny-container'
    : "";
    
  return (
    <div className={'subreddit-container ' + skinnyContainer}>
      <div className='primary-container'>
          <PostListContainer {...props} />
      </div>
      <div className='sidebar-container'>
        <SideBar {...props} />
      </div>
    </div>
  )
}

export default Subreddit;
