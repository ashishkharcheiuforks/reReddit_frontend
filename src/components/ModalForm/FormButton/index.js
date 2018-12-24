import React from 'react';
import { Button } from 'react-bootstrap';
import { CircleLoader } from 'react-spinners';

import './styles.css'

const FormButton = ({bsStyle, handleClick, loading, content, type}) => {
  
  const spinnerStyle = 'display: inline-block;'
  
  const spinner = loading ?
    <CircleLoader
      size={20}
      className={spinnerStyle}
    /> :
    null;
  
  

  return (
    <div id='single-button'>
      <Button
        bsStyle={bsStyle}
        className='login-buttons'
        onClick={() => handleClick()}
        disabled={loading}
        type={type || 'button'}
      >
        {spinner ? spinner : content}
      </Button>
    </div>
  );
}

export default FormButton;
