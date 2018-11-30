import React from 'react';
import { Button } from 'react-bootstrap';

import './styles.css';
import SubscriptionButton from './SubscriptionButton';

const SideBar = (props) => {
  
  const {
    title,
    description,
    makeSubscriptionRequest,
    subscribed,
  } = props;
  
  return (
    <div className='sidebar-content'>
      <div className='title'>
        r/{title}
      </div>
      
      <div className="description">
        {description}
      </div>
      <SubscriptionButton
        makeSubscriptionRequest={makeSubscriptionRequest}
        subscribed={subscribed}
        title={title}
      />
      
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
