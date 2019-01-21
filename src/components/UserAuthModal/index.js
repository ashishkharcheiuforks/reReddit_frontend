import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

import "./styles.css";
import { SuccessAlert, ErrorAlert } from "../AlertMessage";

const UserAuthModal = props => {
  const { handleHide, title, subtitle, formComponent, messageProps } = props;

  const { errorMessage, successMessage } = messageProps;

  let eMessage,
    sMessage = null;

  if (successMessage) {
    sMessage = <SuccessAlert>{successMessage}</SuccessAlert>;
  }

  if (errorMessage) {
    eMessage = <ErrorAlert>{errorMessage}</ErrorAlert>;
  }

  return (
    <Modal onHide={handleHide} show>
      <div id="custom-modal-contents">
        <div id="colorful-side">
          <a
            href={`
              https://www.pexels.com/photo/amazing-astronomy-background-bright
              -544268/?utm_content=attributionCopyText&utm_medium=referral&utm
              _source=pexels`}
          >
            Photo by Luck Galindo from Pexels
          </a>
        </div>
        <div id="form-container">
          <Modal.Header closeButton>
            <h2 id="modal-title">{title}</h2>
            <h4 id="modal-subtitle">{subtitle}</h4>
          </Modal.Header>
          <Modal.Body>
            {sMessage}
            {eMessage}
            {formComponent}
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
};

UserAuthModal.propTypes = {
  handleHide: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  messageProps: PropTypes.shape({
    errorMessage: PropTypes.string,
    successMessage: PropTypes.string
  })
};

export default UserAuthModal;
