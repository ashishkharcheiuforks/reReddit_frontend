import React from 'react';



import UnauthenticatedUser from './UnauthenticatedUser';
import AuthenticatedUser from './AuthenticatedUser';

const UserAuthNav = ({showModal, username}) => {
  return (
    username ?
    <AuthenticatedUser username={username} /> :
    <UnauthenticatedUser showModal={showModal} />
  );
}

export default UserAuthNav;