import React from 'react';
import { Alert } from 'react-bootstrap';
import { FaTimes, FaCheck } from 'react-icons/fa';

import './styles.css';

export const SuccessAlert = (props) => (
  <Alert bsStyle='success' className='alert-message'>
    <FaCheck color='green' size='3em' />
    <p className="alert-text" id='success-text' align='center'>
      {props.children}
    </p>
  </Alert>
)


export const ErrorAlert = (props) => (
  <Alert bsStyle='danger' className='alert-message'>
    <FaTimes color='red' size='3em' />
    <p className="alert-text" id='error-text' align='center'>
      {props.children}
    </p>
  </Alert>
)
