import React from "react";
import { withRouter } from "react-router";

import SideBarContainer from "../../containers/SideBarContainer";
import { SideBarLoader } from "../../components/Loaders";
import { withEither } from "../../utilities/HOC";
import { checkForPseudoSubreddits } from "../../reducers/subreddit";
import { SUBREDDIT_URL } from "../../urls";
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
    history,
    ...restProps
  } = props;

  const redirectToSubreddit = () => {
    history.push(SUBREDDIT_URL(routeSubredditTitle));
  };

  const skinnyContainer = skinny ? "skinny-container" : "";

  const SideBarContainerWithLoader = withEither(
    props => props.loading,
    SideBarLoader
  )(SideBarContainer);

  // Need to perform check with route title rather than
  // redux version to avoid incorrect initial render of header bar
  const headerBar = checkForPseudoSubreddits(routeSubredditTitle) ? null : (
    <div className="subreddit-header-bar" onClick={redirectToSubreddit}>
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
