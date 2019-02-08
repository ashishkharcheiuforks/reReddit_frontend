import React from "react";
import { Modal } from "react-bootstrap";

import "./styles.css";
import reredditIcon from "../../images/reredditIcon.png";

const InitialVisitModal = props => {
  const { toggleFlag } = props;

  return (
    <Modal show onHide={toggleFlag} size="lg" id="iv-modal">
      <Modal.Header closeButton id="iv-modal-header" />
      <Modal.Body id="iv-modal-body">
        <div id="iv-colorful-side">
          <img id="iv-rereddit-icon" src={reredditIcon} alt="RR" />
        </div>
        <div id="iv-modal-body-content">
          <h3> Welcome to reReddit! </h3>
          <p>
            This is a clone of the true reddit site that has a subset of its
            functionality. What you are looking at now is a single page React
            application that is consuming a Django Rest Framework backend api.
          </p>
          <p>
            If some of the content looks a little bit off to you, you're right.
            All of the data is generated with the Python package Faker and it is
            all nonsense. But the site needs to have a minimum threshold of
            subreddits, posts, comments and votes to feel right.
          </p>
          <p>
            Go ahead and register a user account and check it out! The site is
            pretty much functional for the basics. That being said I am still
            adding features regularly. If you see something is amiss or have a
            cool idea please shoot me an email at clint@clintdunn.org or feel
            free to post an issue on my
            <a
              href="https://github.com/cdunn6754"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InitialVisitModal;
