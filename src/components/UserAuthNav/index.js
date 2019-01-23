import React, { Fragment } from "react";

import UnauthenticatedUser from "./UnauthenticatedUser";
import AuthenticatedUser from "./AuthenticatedUser";
import MobileUserAuthNav from "./Mobile/MobileUserAuthNav";

const UserAuthNav = ({ showModal, authUsername, handleLogout }) => {
  const largeScreenComponent = (
    <div id="full-user-auth-dropdown-container">
      {authUsername ? (
        <AuthenticatedUser
          username={authUsername}
          handleLogout={handleLogout}
        />
      ) : (
        <UnauthenticatedUser showModal={showModal} />
      )}
    </div>
  );

  return (
    <Fragment>
      <MobileUserAuthNav
        {...{
          showModal,
          authUsername,
          handleLogout
        }}
      />
      {largeScreenComponent}
    </Fragment>
  );
};

export default UserAuthNav;
