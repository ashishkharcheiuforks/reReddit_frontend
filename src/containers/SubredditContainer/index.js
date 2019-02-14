import React, { Component } from "react";
import { connect } from "react-redux";

import {
  makeSubDetailRequest,
  makeSubSubscriptionRequest
} from "../../actions/Subreddit";
import { getSubredditData } from "../../reducers/subreddit";
import Subreddit from "../../components/Subreddit";

class SubredditContainer extends Component {
  componentDidMount() {
    // a null subredditTitle implies we are at the home url
    const subredditTitle = this.props.match.params.subredditTitle || "home";
    this.props.fetchSubDetail(subredditTitle);
  }

  componentDidUpdate(prevProps) {
    // a null subredditTitle implies we are at the home url
    const subredditTitle = this.props.match.params.subredditTitle || "home";
    if (
      this.props.match.params.subredditTitle !==
      prevProps.match.params.subredditTitle
    ) {
      this.props.fetchSubDetail(subredditTitle);
    }
  }

  render() {
    const {
      subredditData: { title, description, pseudo, loading },
      primaryComponent,
      skinny,
      showSortByNavBar
    } = this.props;

    return (
      <Subreddit
        {...{
          title,
          description,
          pseudo,
          loading,
          primaryComponent,
          skinny,
          showSortByNavBar
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  subredditData: getSubredditData(state)
});

const mapDispatchToProps = dispatch => ({
  fetchSubDetail: subredditTitle =>
    dispatch(makeSubDetailRequest(subredditTitle)),
  makeSubscriptionRequest: (subredditTitle, subAction) =>
    dispatch(makeSubSubscriptionRequest(subredditTitle, subAction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditContainer);
