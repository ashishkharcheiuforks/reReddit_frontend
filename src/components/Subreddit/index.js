import React from "react";
import { withRouter } from "react-router";

import SideBarContainer from "../../containers/SideBarContainer";
import { SideBarLoader } from "../../components/Loaders";
import { withEither } from "../../utilities/HOC";
import { checkForPseudoSubreddits } from "../../reducers/subreddit";
import "./styles.css";

const Subreddit = props => {
  const {
    skinny,
    primaryComponent,
    loading,
    match: {
      params: {
        subredditTitle: routeSubredditTitle = "Home" //if undefined it's home
      }
    },
    ...restProps
  } = props;

  const skinnyContainer = skinny ? "skinny-container" : "";

  const SideBarContainerWithLoader = withEither(
    props => props.loading,
    SideBarLoader
  )(SideBarContainer);
  // Need to perform check with route title rather than
  // redux version to avoid initial render of header bar
  const headerBar = checkForPseudoSubreddits(routeSubredditTitle) ? null : (
    <div className="subreddit-header-bar">
      <div id="subreddit-header-bar-title">r/{routeSubredditTitle}</div>
    </div>
  );

  return (
    <div className="subreddit-container">
      {headerBar}
      <div className={"subreddit-content " + skinnyContainer}>
        <div className="primary-container">{primaryComponent(restProps)}</div>
        <div className="sidebar-container">
          <SideBarContainerWithLoader loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Subreddit);
