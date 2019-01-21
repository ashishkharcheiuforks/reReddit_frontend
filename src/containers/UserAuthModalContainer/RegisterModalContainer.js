import React, { Fragment } from "react";
import { connect } from "react-redux";

import UserAuthModal from "../../components/UserAuthModal";
import ModalRegisterForm from "../../components/ModalForm/ModalRegisterForm";
import { hideUserAuthModal } from "../../actions/UserAuthModal";
import { makeUserRegisterRequest } from "../../actions/UserAuth";
import { showUserAuthModal } from "../../actions/UserAuthModal";

const RegisterModalContainer = props => {
  const {
    handleHide,
    handleRegister,
    showLoginModal,
    loading,
    messageProps
  } = props;

  const RegisterHeader = (
    <Fragment>
      <h2>Sign up:</h2>
      <p>
        By registering with reReddit you can submit posts, vote on content, and
        subscribe your favorite subreddits to stay up to date.
      </p>
    </Fragment>
  );

  const subtitle = `
    By registering with reReddit you can submit posts, vote on content,
    and subscribe your favorite subreddits to stay up to date.
  `;

  return (
    <UserAuthModal
      handleHide={handleHide}
      title="Sign up"
      subtitle={subtitle}
      messageProps={messageProps}
      formComponent={
        <ModalRegisterForm
          {...{
            handleRegister,
            handleHide,
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
  handleHide: () => dispatch(hideUserAuthModal()),
  handleRegister: (username, password, email) =>
    dispatch(makeUserRegisterRequest(username, password, email)),
  showLoginModal: () => dispatch(showUserAuthModal("login"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModalContainer);
