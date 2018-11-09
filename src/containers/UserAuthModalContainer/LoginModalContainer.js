import React from 'react';
import { connect } from 'react-redux';

import UserAuthModal from '../../components/UserAuthModal';
import ModalLoginForm from "../../components/ModalLoginForm";
import { hideUserAuthModal } from '../../actions/UserAuthModal';
import { makeUserLoginRequest } from '../../actions/UserAuth';

const LoginModalContainer = (props) => {
  const {
    handleHide,
    handleLogin,
  } = props;
  
  return (
    <UserAuthModal 
      handleHide={handleHide}
      title='User Login'
      formComponent={<ModalLoginForm handleLogin={handleLogin}/>}
    />
  );
}

const mapDispatchToProps = dispatch => (
  {
    handleHide: () => dispatch(hideUserAuthModal()),
    handleLogin: (credentials) => dispatch(makeUserLoginRequest(credentials)),
  }
);

export default connect(
  null,
  mapDispatchToProps,
)(LoginModalContainer);