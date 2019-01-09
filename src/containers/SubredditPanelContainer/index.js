import React from "react";
import { connect } from "react-redux";

import SubredditPanel from "../../components/SubredditPanel";
import { getSearchSubredditById } from "../../reducers/search";

const SubredditPanelContainer = ({ subreddit }) => (
  <SubredditPanel subreddit={subreddit} />
);

const mapStateToProps = (state, { pk }) => ({
  subreddit: getSearchSubredditById(state, pk)
});

export default connect(mapStateToProps)(SubredditPanelContainer);
