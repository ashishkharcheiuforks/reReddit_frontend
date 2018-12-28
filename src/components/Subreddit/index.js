import React from 'react';

import SideBar from '../SideBar';
import './styles.css';

const Subreddit = ({skinny, primaryComponent, loading, ...props}) => {

  const skinnyContainer = skinny
    ? 'skinny-container'
    : "";
  
  return (
    <div className={'subreddit-container ' + skinnyContainer}>
      <div className='primary-container'>
          {primaryComponent(props)}
      </div>
      <div className='sidebar-container'>
        <SideBar {...props} />
      </div>
    </div>
  )
}

export default Subreddit;
