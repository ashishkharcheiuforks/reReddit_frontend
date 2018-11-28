import React from 'react';
import {
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './styles.css'

const NavBarDropdown = ({subscribed}) => {
  
  const subscribedSubs = subscribed.map( sub =>
    <LinkContainer key={sub.id} exact to={"/r/" + sub.title}>
      <MenuItem eventKey={sub.id}>
        {sub.title}
      </MenuItem>
    </LinkContainer>
  )
  
  return (
    <NavDropdown
      className='feed-dropdown'
      eventKey={3}
      title='feed'
      id='basic-nav-dropdown'
    >
      <LinkContainer exact to='/'>
        <MenuItem eventKey={3.1}>
          Home
        </MenuItem>
      </LinkContainer>
      <LinkContainer exact to='/r/popular'>
        <MenuItem eventKey={3.2}>
          Popular
        </MenuItem>
      </LinkContainer>
      <LinkContainer exact to='/r/new'>
        <MenuItem eventKey={3.3}>
          New
        </MenuItem>
      </LinkContainer>
      <MenuItem divider eventKey={3.4} />
      {subscribedSubs}
    </NavDropdown>
  )
}

export default NavBarDropdown;
