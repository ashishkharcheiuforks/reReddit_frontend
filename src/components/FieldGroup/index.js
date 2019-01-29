import React from "react";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

const FieldGroup = props => {
  const { id, label, help, ...rest } = props;
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...rest}>
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormControl>
    </FormGroup>
  );
};

export default FieldGroup;
