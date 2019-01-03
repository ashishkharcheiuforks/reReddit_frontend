import React from 'react';
import { PulseLoader } from 'react-spinners';

import './styles.css';

const BlockLoader = () => (
  <div className="block-loader-container">
    <PulseLoader color={'#BFEFFF'} />
  </div>
)

export default BlockLoader;
