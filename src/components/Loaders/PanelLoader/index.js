import React from "react";
import { PulseLoader } from "react-spinners";

import "./styles.css";

const PanelLoader = () => (
  <div className="panel-loader-container">
    <PulseLoader className="panel-clip-loader" color={"#BFEFFF"} />
  </div>
);

export default PanelLoader;
