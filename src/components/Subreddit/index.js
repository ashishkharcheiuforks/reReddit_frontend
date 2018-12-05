import React from 'react';

import PostListContainer from '../../containers/PostListContainer';
import CreatePostContainer from '../../containers/CreatePostContainer';
import SideBar from '../SideBar';
import { withEither } from '../../utilities/HOC';
import './styles.css';

const Subreddit = ({skinny, primaryComponent, ...props}) => {

  const skinnyContainer = skinny
    ? 'skinny-container'
    : "";
  
  let PrimaryContent = null;
  switch(primaryComponent) {
    case "CreatePost":
      PrimaryContent = <CreatePostContainer {...props} />;
    case "PostList":
      PrimaryContent = <PostListContainer {...props} />;
    default:
  }
  
    
  return (
    <div className={'subreddit-container ' + skinnyContainer}>
      <div className='primary-container'>
          <PrimaryContentContainer {...props} />
      </div>
      <div className='sidebar-container'>
        <SideBar {...props} />
      </div>
    </div>
  )
}

export default Subreddit;
