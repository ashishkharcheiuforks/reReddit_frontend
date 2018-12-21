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
    
    const {
      upvotes,
      displayState,
      handleVote
    } = this.props;
    
    return (
      <div className='vote-container'>
        <div className='voter-arrow upvoter'>
          <span
            style={displayState === 1 ? this.upvotedStyle : {}}
            onClick={() => handleVote(1)}
          >
            <FaArrowUp />
          </span>
        </div>
        <div className='vote-count'>
          {upvotes}
        </div>
        <div className='voter-arrow downvoter'>
          <span
            style={displayState === -1 ? this.downvotedStyle : {}}
            onClick={() => handleVote(-1)}
          >
            <FaArrowDown />
          </span>
        </div>
      </div>
    )
  }
}

export default Voter;
