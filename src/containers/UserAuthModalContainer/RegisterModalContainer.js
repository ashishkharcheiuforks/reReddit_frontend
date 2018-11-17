import React from 'react';
import { connect } from 'react-redux';

import UserAuthModal from '../../components/UserAuthModal';
import ModalRegisterForm from '../../components/ModalForm/ModalRegisterForm';
import { hideUserAuthModal } from '../../actions/UserAuthModal';
import { makeUserRegisterRequest } from '../../actions/UserAuth';

const RegisterModalContainer = (props) => {
  const {
    handleHide,
    handleRegister,
    loading,
    messageProps,
  } = props;
  
  return (
    <UserAuthModal
      handleHide={handleHide}
      title='Register'
      messageProps={messageProps}
      formComponent={
        <ModalRegisterForm
          handleRegister={handleRegister}
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

const mapDispatchToProps = (dispatch) => (
  {
  handleHide: () => dispatch(hideUserAuthModal()),
  handleRegister: (username, password, email) =>
    dispatch(makeUserRegisterRequest(username, password, email)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModalContainer);
