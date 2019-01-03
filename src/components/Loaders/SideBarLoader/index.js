import React from 'react';
import { PulseLoader } from 'react-spinners';

import './styles.css'

const SideBarLoader = () => (
  <div className="sidebar-loader-container">
    <PulseLoader color={'#BFEFFF'}/>
  </div>
)

export default SideBarLoader;
