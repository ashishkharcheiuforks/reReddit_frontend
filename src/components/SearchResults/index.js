import React, { Component } from "react";

import PostList from "../PostList";
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
    const { allPosts, loading, error, query } = this.props;

    return (
      <div className="search-results-container">
        <div className="search-navbar">
          <div className="search-query-name">
            <h2>Search results for: {query}</h2>
          </div>
        </div>

        <div className="results-list-container">
          <PostList {...{ allPosts, error, loading }} />
        </div>
      </div>
    );
  }
}

export default SearchResults;
