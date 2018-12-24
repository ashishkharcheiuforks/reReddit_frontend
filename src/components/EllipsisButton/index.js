import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const EllipsisButton = (props) => (
  <Button bsSize='xsmall' className='comment-buttons'>
    <FaEllipsisH />
  </Button>
)

export default EllipsisButton;
