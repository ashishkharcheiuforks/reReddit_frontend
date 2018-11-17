import React from 'react';
import { connect } from 'react-redux';

import LoginModalContainer from './LoginModalContainer';
import RegisterModalContainer from './RegisterModalContainer';

const UserAuthModalContainer = ({displayType, messageProps}) => {
  switch (displayType) {
    case 'login':
      return <LoginModalContainer messageProps={messageProps}/>;
    case 'register':
      return <RegisterModalContainer messageProps={messageProps}/>;
    default:
      return null;
  }
}

const mapStateToProps = state => (
  {
      displayType: state.userAuthModal.displayType,
      messageProps: {
        errorMessage: state.userAuthModal.errorMessage,
        successMessage: state.userAuthModal.successMessage,
      },
  }
);

export default connect(
  mapStateToProps
) (UserAuthModalContainer);
