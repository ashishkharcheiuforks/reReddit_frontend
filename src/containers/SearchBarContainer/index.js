import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../../components/SearchBar';
import { makeSearchRequest } from '../../actions/Search';

const SearchBarContainer = (props) => {
  
  const {
    handleSearchRequest,
  } = props;
  
  return (
    <SearchBar {...{handleSearchRequest}} />
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleSearchRequest: (q) => dispatch(makeSearchRequest(q))
});

export default connect(
  null,
  mapDispatchToProps,
)(SearchBarContainer);
