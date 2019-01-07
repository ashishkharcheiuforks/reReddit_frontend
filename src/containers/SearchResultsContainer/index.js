import React from 'react';
import { connect } from 'react-redux';

import PostList from '../../components/PostList';
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
    <PostList allPosts={allPosts} />
  )
}

const mapStateToProps = (state) => ({
  allPosts: getSearchAllPosts(state),
  error: getSearchError(state),
})

export default connect(
  mapStateToProps,
)(SearchResultsContainer);
