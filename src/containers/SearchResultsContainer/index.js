import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchResults from '../../components/SearchResults';
import { makeSearchRequest } from '../../actions/Search';
import {
  getAllPosts,
} from '../../reducers/postList'
import {
  getSearchError,
  getSearchQuery,
  getSearchLoading,
} from '../../reducers/search';

class SearchResultsContainer extends Component {
  
  componentDidMount() {
    this.props.searchRequest(this.props.query)
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.props.searchRequest(this.props.query)
    }
  }
  
  render() {
    const {
      allPosts,
      error,
      loading,
    } = this.props;
    
    return (
      <SearchResults {...{
          allPosts,
          loading,
          error,
        }}
      />
    )
  }

}

const mapStateToProps = (state) => ({
  query: getSearchQuery(state),
  allPosts: getAllPosts(state),
  error: getSearchError(state),
  loading: getSearchLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
  searchRequest: (q) => dispatch(makeSearchRequest(q)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultsContainer);
