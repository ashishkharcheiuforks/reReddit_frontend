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
    loading,
  } = props;
  
  return (
    <UserAuthModal 
      handleHide={handleHide}
      title='Login'
      formComponent={
        <ModalLoginForm
          handleLogin={handleLogin} 
          handleHide={handleHide}
          loading={loading}
        />
      }
    />
  );
}

const mapStatetoProps = state => (
  {
      loading: state.userAuth.loading,
  }
);
const mapDispatchToProps = dispatch => (
  {
    handleHide: () => dispatch(hideUserAuthModal()),
    handleLogin: (credentials) => dispatch(makeUserLoginRequest(credentials)),
  }
);

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(LoginModalContainer);