import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateSubreddit from '../../components/CreateSubreddit';
import { makeCreateSubredditRequest } from '../../actions/Subreddit';
import {
  getCreateSubredditError,
  getCreateSubredditLoading,
} from '../../reducers/createSubreddit';


class CreateSubredditContainer extends Component {
  
  render() {
    const {
      errorMessage,
      loading,
      handleCreateSubreddit,
    } = this.props;
    
    return (
      <CreateSubreddit {...{
        errorMessage,
        loading,
        handleCreateSubreddit,
      }}/>
    )
  }
}

const mapStateToProps = (state) => ({
  errorMessage: getCreateSubredditError(state),
  loading: getCreateSubredditLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleCreateSubreddit: (subredditData) =>
    dispatch(makeCreateSubredditRequest(subredditData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateSubredditContainer);
