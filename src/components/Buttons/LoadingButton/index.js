import React from "react";
import { Button } from "react-bootstrap";
import { CircleLoader } from "react-spinners";

import "./styles.css";

const LoadingButton = props => {
  const { loading, children, className, ...rest } = props;

  const spinner = <CircleLoader size={20} className="display: inline-block" />;

  // when loading make the text transparent, this retains the button size
  const style = loading
    ? {
        color: "transparent"
      }
    : {};

  return (
    <div className="loading-button-container">
      <Button {...rest} className={className || "loading-button"} style={style}>
        <div className="button-spinner-container">
          {loading ? spinner : null}
        </div>
        {children}
      </Button>
    </div>
  );
};

export default LoadingButton;
