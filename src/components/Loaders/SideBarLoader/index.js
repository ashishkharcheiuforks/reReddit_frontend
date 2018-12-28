import React from 'react';
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';

import './styles.css'

const SideBarLoader = () => (
  <div className="sidebar-loader-container">
    <PulseLoader color={'#BFEFFF'}/>
  </div>
)

export default SideBarLoader;
