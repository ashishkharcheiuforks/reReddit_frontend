import React from 'react';



import UnauthenticatedUser from './UnauthenticatedUser';
import AuthenticatedUser from './AuthenticatedUser';

const UserAuthNav = ({showModal, username, handleLogout}) => {
  return (
    username ?
    <AuthenticatedUser username={username} handleLogout={handleLogout} /> :
    <UnauthenticatedUser showModal={showModal} />
  );
}

export default UserAuthNav;