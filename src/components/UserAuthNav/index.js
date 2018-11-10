import React from 'react';



import UnauthenticatedUser from './UnauthenticatedUser';
import AuthenticatedUser from './AuthenticatedUser';

const UserAuthNav = ({showModal, token}) => {
  return (
    token ?
    <AuthenticatedUser /> :
    <UnauthenticatedUser showModal={showModal}/>
  );
}

export default UserAuthNav;