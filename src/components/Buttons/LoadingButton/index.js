import React from 'react';
import { Button } from 'react-bootstrap';
import { CircleLoader } from 'react-spinners';

import './styles.css'

const LoadingButton = (props) => {
  
  const {
    loading,
    children,
    className,
    ...rest
  } = props;
  
  const spinner = <CircleLoader size={20} className="display: inline-block" />;
  
  return (
    <div className="loading-button-container">
      <Button
        {...rest}
        className={ className || "loading-button"}
        disabled={loading}
        
      >
        {loading ? spinner : children}
      </Button>
    </div>
  )
}

export default LoadingButton;
