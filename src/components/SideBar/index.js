import React from 'react';
import { Button } from 'react-bootstrap';

import './styles.css';

const SideBar = (props) => {
  
  const {
    title,
    description,
    makeSubscriptionRequest,
  } = props;
  
  return (
    <div className='sidebar-content'>
      <div className='title'>
        r/{title}
      </div>
      
      <div className="description">
        {description}
      </div>
      
      <Button
        className='sidebar-button'
        id='subscribe-button'
        onClick= {() => makeSubscriptionRequest(title)}
        >
        SUBSCRIBE
      </Button>
      
      <Button
        id='create-post-button'
        className='sidebar-button'
      >
        CREATE POST
      </Button>
    </div>
  )
}

export default SideBar;
