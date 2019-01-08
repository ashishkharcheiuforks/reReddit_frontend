import React from 'react';
import { connect } from 'react-redux';

import SearchResults from '../../components/SearchResults';
import {
  getSearchPostById,
  getSearchAllPosts,
  getSearchError,
} from '../../reducers/search';

const SearchResultsContainer = (props) => {
  const {
    allPosts,
    error,
  } = props;
  
  return (
    <SearchResults allPosts={allPosts} />
  )
}

const mapStateToProps = (state) => ({
  allPosts: getSearchAllPosts(state),
  error: getSearchError(state),
})

export default connect(
  mapStateToProps,
)(SearchResultsContainer);
