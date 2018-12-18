import React, { Component, Fragment } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import './styles.css';

class Voter extends Component {

  state = {
    displayState: this.props.initialDisplayState,
    upvotedStyle: {},
    downvotedStyle: {},
  }
  
  upvotedStyle = {
    color: '#cc3700',
  }
  
  downvotedStyle = {
    color: '#8DA8FF',
  }
  
handleVoteClick = (vote) => {
  // If you vote for an option you already selected that is a no-vote
  const newVote = vote === this.state.displayState
    ? 0
    : vote;
      
    this.setState({
      displayState: newVote,
    })
    
    this.props.handleVote(newVote)
}
  
  render() {
    
    return (
      <Fragment>
        <div className={'voter upvoter'}>
          <span
            style={this.state.displayState === 1 ? this.upvotedStyle : {}}
            onClick={() => this.handleVoteClick(1)}
          >
            <FaArrowUp />
          </span>
        </div>
        <div className={ 'voter downvoter ' + this.state.downvoted }>
          <span
            style={this.state.displayState === -1 ? this.downvotedStyle : {}}
            onClick={() => this.handleVoteClick(-1)}
          >
            <FaArrowDown />
          </span>
        </div>
      </Fragment>
    )
  }
}

export default Voter;
