import React, { Component } from 'react';

import PostList from '../PostList';
import './styles.css';

class SearchResults extends Component {
  
  
  render() {
    
    const {
      allPosts
    } = this.props
    
    return(
      <div className="search-results-container">
        
        <div className="results-list-container">
          <PostList {...{allPosts}} usage="search" />
        </div>
      </div>
    )

  }
}

export default SearchResults;
