import React from 'react';

import PostListContainer from '../../containers/PostListContainer';
import CreatePostContainer from '../../containers/CreatePostContainer';
import SideBar from '../SideBar';
import { withEither } from '../../utilities/HOC';
import './styles.css';

const Subreddit = (props) => {
  const skinnyContainer = props.match.params.createPost === 'createPost'
    ? 'skinny-container'
    : "";
  
  const primaryConditionFn = (props) => props.match.params.createPost === 'createPost';
  // const PrimaryContentContainer = withEither(
  //   primaryConditionFn,
  //   CreatePostContainer
  // )(PostListContainer);

  const PrimaryContentContainer = primaryConditionFn(props)
    ? CreatePostContainer
    : PostListContainer;
  
    
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
