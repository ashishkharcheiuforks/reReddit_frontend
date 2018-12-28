import React from 'react';

import SideBar from '../SideBar';
import { SideBarLoader } from '../../components/Loaders';
import { withEither } from '../../utilities/HOC';
import './styles.css';

const Subreddit = ({skinny, primaryComponent, ...props}) => {

  const skinnyContainer = skinny
    ? 'skinny-container'
    : "";
    
  const SideBarWithLoader = withEither(
    (props) => props.loading, SideBarLoader
  )(SideBar)
  
  return (
    <div className={'subreddit-container ' + skinnyContainer}>
      <div className='primary-container'>
          {primaryComponent(props)}
      </div>
      <div className='sidebar-container'>
        <SideBarWithLoader {...props} />
      </div>
    </div>
  )
}

export default Subreddit;
