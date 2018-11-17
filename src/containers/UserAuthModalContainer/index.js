import React from 'react';
import { connect } from 'react-redux';

import LoginModalContainer from './LoginModalContainer';
import RegisterModalContainer from './RegisterModalContainer';

const UserAuthModalContainer = ({displayType, warningMessage, successMessage}) => {
  switch (displayType) {
    case 'login':
      return <LoginModalContainer warningMessage={warningMessage} />;
    case 'register':
      return <RegisterModalContainer />;
    default:
      return null;
  }
}

const mapStateToProps = state => (
  {
      displayType: state.userAuthModal.displayType,
      warningMessage: state.userAuthModal.warningMessage,
      successMessage: state.userAuthModal.successMessage,
  }
);

export default connect(
  mapStateToProps
) (UserAuthModalContainer);
