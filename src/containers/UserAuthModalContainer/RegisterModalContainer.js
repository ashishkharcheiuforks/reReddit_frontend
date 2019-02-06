import React from "react";
import { connect } from "react-redux";

import UserAuthModal from "../../components/UserAuthModal";
import ModalRegisterForm from "../../components/ModalForm/ModalRegisterForm";
import { makeUserRegisterRequest } from "../../actions/UserAuth";
import { showUserAuthModal } from "../../actions/UserAuthModal";

const RegisterModalContainer = props => {
  const { handleRegister, showLoginModal, loading, messageProps } = props;

  const subtitle = `
    By registering with reReddit you can submit posts, vote on content,
    and subscribe your favorite subreddits to stay up to date.
  `;

  return (
    <UserAuthModal
      title="Sign up"
      subtitle={subtitle}
      messageProps={messageProps}
      formComponent={
        <ModalRegisterForm
          {...{
            handleRegister,
            showLoginModal,
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
  handleRegister: (username, password, email) =>
    dispatch(makeUserRegisterRequest(username, password, email)),
  showLoginModal: () => dispatch(showUserAuthModal("login"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModalContainer);
