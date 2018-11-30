import React from 'react';
import { Button } from 'react-bootstrap';

import './styles.css';

const SideBar = ({title, description}) => {
  
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
        id='subscribe-button'>
        SUBSCRIBE
      </Button>
      
      <Button
        id='create-post-button'
        className='sidebar-button'>
        CREATE POST
      </Button>
      
    </div>
  )
}

export default SideBar;
