import React from 'react';
import { connect } from 'react-redux';
import LoginModalContainer from './LoginModalContainer';


const UserAuthModalContainer = ({displayType}) => {
  switch (displayType) {
    case 'login':
      return <LoginModalContainer />;
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