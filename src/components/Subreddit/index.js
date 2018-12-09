import React from 'react';

import PostListContainer from '../../containers/PostListContainer';
import PostDetailContainer from '../../containers/PostDetailContainer';
import CreatePostContainer from '../../containers/CreatePostContainer';
import SideBar from '../SideBar';
import './styles.css';

const Subreddit = ({skinny, primaryComponent, ...props}) => {

  const skinnyContainer = skinny
    ? 'skinny-container'
    : "";
  
  let PrimaryContent = null;
  switch(primaryComponent) {
    case "CreatePost":
      PrimaryContent = <CreatePostContainer {...props} />;
      break;
    case "PostList":
      PrimaryContent = <PostListContainer {...props} />;
      break;
    case "PostDetail":
      PrimaryContent = <PostDetailContainer {...props} />;
      break;
    default:
  }
  
    
  return (
    <div className={'subreddit-container ' + skinnyContainer}>
      <div className='primary-container'>
          {PrimaryContent}
      </div>
      <div className='sidebar-container'>
        <SideBar {...props} />
      </div>
    </div>
  )
}

export default Subreddit;
