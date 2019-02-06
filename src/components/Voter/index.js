import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import "./styles.css";

class Voter extends Component {
  upvotedStyle = {
    color: "#cc3700"
  };

  downvotedStyle = {
    color: "#8DA8FF"
  };

  render() {
    const { upvotes, displayState, handleVote } = this.props;

    return (
      <div className="vote-container">
        <div className="voter-arrow upvoter">
          <span
            style={displayState === 1 ? this.upvotedStyle : {}}
            onClick={() => handleVote(1)}
          >
            <FaArrowUp />
          </span>
        </div>
        <div
          className="vote-count"
          style={
            displayState === 1
              ? this.upvotedStyle
              : displayState === -1
              ? this.downvotedStyle
              : {}
          }
        >
          {upvotes}
        </div>
        <div className="voter-arrow downvoter">
          <span
            style={displayState === -1 ? this.downvotedStyle : {}}
            onClick={() => handleVote(-1)}
          >
            <FaArrowDown />
          </span>
        </div>
      </div>
    );
  }
}

Voter.propTypes = {
  upvotes: PropTypes.number,
  displayState: PropTypes.oneOf([-1, 0, 1]),
  handleVote: PropTypes.func
};

Voter.defaultProps = {
  backgroundColor: null
};

export default Voter;
