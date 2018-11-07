import React from 'react';
import { Panel } from 'react-bootstrap';
import { PulseLoader } from 'react-spinners';

import './styles.css';

const ListLoader = () => (
  <div>
    <Panel>
      <Panel.Body id="pulse-loader-panel-body">
          <PulseLoader className="panel-clip-loader" color={'#BFEFFF'}/>
      </Panel.Body>
    </Panel>
</div>    
);

export default ListLoader;