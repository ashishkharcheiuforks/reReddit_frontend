import React, { Component, Fragment } from 'react';
import {Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaShare } from 'react-icons/fa';

import './styles.css';


class ShareButton extends Component {
  constructor(props) {
    super(props);
    
  this.state = {
    showTooltip: false,
  }
  
  this.copyNode = React.createRef();
  
    this.copyTooltip = (
      <Tooltip id="copy-tooltip" >
        Copied Link
      </Tooltip>
    );
  }


  toggleTooltip = () => {
    this.setState({showTooltip: !this.state.showTooltip});
  };
  
  copyToClipboard = (e) => {
    this.copyNode.current.select();
    document.execCommand("copy");
    
    this.toggleTooltip();
    setTimeout(this.toggleTooltip, 4000);
  };
  
  render() {
    
    const {
      shareUrl,
    } = this.props;
    
    return (
      <Fragment>
        <OverlayTrigger
          placement="bottom"
          overlay={this.copyTooltip}
          trigger='focus'
          delayHide={4000}
        >
          <Button
            bsSize="xsmall"
            className="share-button"
            onClick={this.copyToClipboard}
          >
            <FaShare /> Share
          </Button>
        </OverlayTrigger>
        <form>
          <input
            id="hidden-copy-input"
            readOnly
            ref={this.copyNode}
            value={shareUrl}
            aria-hidden="true"
          />
        </form>
      </Fragment>
    )
  }
}

export default ShareButton;
