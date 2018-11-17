import React from 'react';
import { connect } from 'react-redux';

import UserAuthModal from '../../components/UserAuthModal';
import ModalLoginForm from "../../components/ModalForm/ModalLoginForm";
import { hideUserAuthModal } from '../../actions/UserAuthModal';
import { makeUserLoginRequest } from '../../actions/UserAuth';

const LoginModalContainer = (props) => {
  const {
    handleHide,
    handleLogin,
    loading,
    warningMessage,
  } = props;
  
  return (
    <UserAuthModal
      handleHide={handleHide}
      title='Login'
      warningMessage={warningMessage}
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

const mapStateToProps = state => (
  {
    loading: state.userAuth.loading,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleHide: () => dispatch(hideUserAuthModal()),
    handleLogin: (username, password) =>
      dispatch(makeUserLoginRequest(username, password)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginModalContainer);
