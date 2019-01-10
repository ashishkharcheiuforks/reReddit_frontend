import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import PostList from "../PostList";
import SubredditList from "../SubredditList";
import NavSelectorButton from "../Buttons/NavSelectorButton";
import { withEither } from "../../utilities/HOC";
import { compose } from "recompose";
import "./styles.css";

const SearchResults = props => {
  const {
    allPosts,
    allSubreddits,
    allUsers,
    loading,
    error,
    query,
    resultsView,
    changeResultsView
  } = props;

  const ConditionalResultsList = compose(
    withEither(props => props.view === "users", () => null),
    withEither(props => props.view === "subreddits", SubredditList)
  )(PostList);

  return (
    <div className="search-results-container">
      <div className="search-navbar">
        <div className="search-query-name">
          <h2>Search results for: "{query}"</h2>
        </div>

        <div className="search-view-selector">
          <NavSelectorButton
            active={resultsView === "posts"}
            onClick={() => changeResultsView("posts")}
          >
            Posts
          </NavSelectorButton>

          <NavSelectorButton
            active={resultsView === "subreddits"}
            onClick={() => changeResultsView("subreddits")}
          >
            Subreddits
          </NavSelectorButton>

          <NavSelectorButton
            active={resultsView === "users"}
            onClick={() => changeResultsView("users")}
          >
            Users
          </NavSelectorButton>
        </div>
      </div>

      <div className="results-list-container">
        <ConditionalResultsList
          {...{
            allPosts,
            allSubreddits,
            allUsers,
            error,
            loading
          }}
          view={resultsView}
        />
      </div>
    </div>
  );
};

export default SearchResults;
