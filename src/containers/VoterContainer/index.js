import React from 'react';
import { connect } from 'react-redux';

import Voter from '../../components/Voter';
import { makeVoteRequest } from '../../actions/Voter';

const VoterContainer = ({voteDisplayState, handleVote, upvotes}) => (
  <Voter
    displayState={voteDisplayState}
    handleVote={handleVote}
    upvotes={upvotes}
  />
)

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    handleVote: (voteType) => dispatch(
      makeVoteRequest({
      voteType,
      itemType: ownProps.itemType,
      itemPk: ownProps.itemPk,
      })
    ),
  }
)

export default connect(
  null,
  mapDispatchToProps,
)(VoterContainer);
