import React from 'react';
import { Button } from 'react-bootstrap';

import './styles.css';
import SubscriptionButton from './SubscriptionButton';

const SideBar = (props) => {
  
  const {
    title,
    description,
    makeSubscriptionRequest,
    userSubs: {subscribed: userSubscriptions},
    authenticatedUser,
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
        userSubscriptions={userSubscriptions}
        title={title}
        authenticatedUser={authenticatedUser}
      />
      
      <Button
        id='create-post-button'
        className='sidebar-button'
        onClick={() => props.history.push(`/r/${props.title}/createPost`)}
      >
        CREATE POST
      </Button>
    </div>
  )
}

export default SideBar;
