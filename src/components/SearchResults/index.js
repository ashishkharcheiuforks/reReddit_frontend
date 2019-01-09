import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import PostList from "../PostList";
import SubredditList from "../SubredditList";
import NavSelectorButton from "../Buttons/NavSelectorButton";
import { withEither } from "../../utilities/HOC";
import { compose } from "recompose";
import "./styles.css";

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentResultsView: "posts"
    };
  }

  changeResultsView = newView => {
    this.setState({ currentResultsView: newView });
  };

  render() {
    const {
      allPosts,
      allSubreddits,
      allUsers,
      loading,
      error,
      query
    } = this.props;

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
              active={this.state.currentResultsView === "posts"}
              onClick={() => this.changeResultsView("posts")}
            >
              Posts
            </NavSelectorButton>

            <NavSelectorButton
              active={this.state.currentResultsView === "subreddits"}
              onClick={() => this.changeResultsView("subreddits")}
            >
              Subreddits
            </NavSelectorButton>

            <NavSelectorButton
              active={this.state.currentResultsView === "users"}
              onClick={() => this.changeResultsView("users")}
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
            view={this.state.currentResultsView}
          />
        </div>
      </div>
    );
  }
}

export default SearchResults;
