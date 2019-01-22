import React from "react";
import { connect } from "react-redux";

import LoginModalContainer from "./LoginModalContainer";
import RegisterModalContainer from "./RegisterModalContainer";
import { hideUserAuthModal } from "../../actions/UserAuthModal";
import { Modal } from "react-bootstrap";

const UserAuthModalContainer = ({ displayType, messageProps, handleHide }) => {
  let modalContent;

  switch (displayType) {
    case "login":
      modalContent = <LoginModalContainer messageProps={messageProps} />;
      break;
    case "register":
      modalContent = <RegisterModalContainer messageProps={messageProps} />;
      break;
    default:
      return null;
  }

  return (
    <Modal onHide={handleHide} show>
      {modalContent}
    </Modal>
  );
};

const mapStateToProps = state => ({
  displayType: state.userAuthModal.displayType,
  messageProps: {
    errorMessage: state.userAuthModal.errorMessage,
    successMessage: state.userAuthModal.successMessage
  }
});

const mapDispatchToProps = dispatch => ({
  handleHide: () => dispatch(hideUserAuthModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuthModalContainer);
