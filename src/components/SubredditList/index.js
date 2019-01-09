import React from "react";
import PropTypes from "prop-types";

import SubredditPanelContainer from "../../containers/SubredditPanelContainer";
import "./styles.css";

const SubredditList = props => {
  const { loading, error, allSubreddits } = props;

  const subredditList = allSubreddits.map(subredditPk => (
    <SubredditPanelContainer key={subredditPk} pk={subredditPk} />
  ));

  return (
    <div className="subreddit-search-results-container">{subredditList}</div>
  );
};

export default SubredditList;
