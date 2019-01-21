import React from "react";
import { connect } from "react-redux";

import UserAuthModal from "../../components/UserAuthModal";
import ModalLoginForm from "../../components/ModalForm/ModalLoginForm";
import { hideUserAuthModal } from "../../actions/UserAuthModal";
import { makeUserLoginRequest } from "../../actions/UserAuth";
import { showUserAuthModal } from "../../actions/UserAuthModal";

const LoginModalContainer = props => {
  const {
    handleHide,
    handleLogin,
    showRegisterModal,
    loading,
    messageProps
  } = props;

  return (
    <UserAuthModal
      handleHide={handleHide}
      title="Sign in"
      messageProps={messageProps}
      formComponent={
        <ModalLoginForm
          {...{
            handleLogin,
            handleHide,
            showRegisterModal,
            loading
          }}
        />
      }
    />
  );
};

const mapStateToProps = state => ({
  loading: state.userAuth.loading
});

const mapDispatchToProps = dispatch => ({
  handleHide: () => dispatch(hideUserAuthModal()),
  handleLogin: (username, password) =>
    dispatch(makeUserLoginRequest(username, password)),
  showRegisterModal: () => dispatch(showUserAuthModal("register"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModalContainer);
