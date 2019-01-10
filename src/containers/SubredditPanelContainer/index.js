import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import SubredditPanel from "../../components/SubredditPanel";
import { getSearchSubredditById } from "../../reducers/search";
import { SUBREDDIT_URL } from "../../urls";

class SubredditPanelContainer extends Component {
  handleSubredditRedirect = () =>
    this.props.history.push(SUBREDDIT_URL(this.props.subreddit.title));

  render() {
    const { subreddit } = this.props;

    return (
      <SubredditPanel
        subreddit={subreddit}
        handleSubredditRedirect={this.handleSubredditRedirect}
      />
    );
  }
}

const mapStateToProps = (state, { pk }) => ({
  subreddit: getSearchSubredditById(state, pk)
});

export default withRouter(connect(mapStateToProps)(SubredditPanelContainer));
