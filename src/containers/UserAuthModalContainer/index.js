import React from 'react';
import { connect } from 'react-redux';

import LoginModalContainer from './LoginModalContainer';
import RegisterModalContainer from './RegisterModalContainer';

const UserAuthModalContainer = ({displayType}) => {
  switch (displayType) {
    case 'login':
      return <LoginModalContainer />;
    case 'register':
      return <RegisterModalContainer />;
    default:
      return null;
  }
}

const mapStateToProps = state => (
  {
      displayType: state.userAuthModal.displayType,
  }
);

export default connect(
  mapStateToProps
) (UserAuthModalContainer);
