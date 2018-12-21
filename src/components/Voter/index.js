import React, { Component, Fragment } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import './styles.css';

class Voter extends Component {
  
  upvotedStyle = {
    color: '#cc3700',
  }
  
  downvotedStyle = {
    color: '#8DA8FF',
  }
  
  render() {
    
    return (
      <div className='vote-container'>
        <div className='voter-arrow upvoter'>
          <span
            style={this.props.displayState === 1 ? this.upvotedStyle : {}}
            onClick={() => this.props.handleVote(1)}
          >
            <FaArrowUp />
          </span>
        </div>
        <div className='vote-count'>
          123
        </div>
        <div className='voter-arrow downvoter'>
          <span
            style={this.props.displayState === -1 ? this.downvotedStyle : {}}
            onClick={() => this.props.handleVote(-1)}
          >
            <FaArrowDown />
          </span>
        </div>
      </div>
    )
  }
}

export default Voter;
