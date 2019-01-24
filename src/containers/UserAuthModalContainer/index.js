import React from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";

import LoginModalContainer from "./LoginModalContainer";
import RegisterModalContainer from "./RegisterModalContainer";
import UpdateModalContainer from "./UpdateModalContainer";
import { hideUserAuthModal } from "../../actions/UserAuthModal";
import { getAuthUsername } from "../../reducers/userAuth";

const UserAuthModalContainer = props => {
  const { displayType, messageProps, handleHide, authUsername } = props;

  let modalContent;
  switch (displayType) {
    case "login":
      modalContent = <LoginModalContainer messageProps={messageProps} />;
      break;
    case "register":
      modalContent = <RegisterModalContainer messageProps={messageProps} />;
      break;
    case "update":
      modalContent = (
        <UpdateModalContainer
          messageProps={messageProps}
          username={authUsername}
        />
      );
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
  },
  authUsername: getAuthUsername(state)
});

const mapDispatchToProps = dispatch => ({
  handleHide: () => dispatch(hideUserAuthModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuthModalContainer);
