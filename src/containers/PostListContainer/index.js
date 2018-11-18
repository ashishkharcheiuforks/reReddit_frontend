import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makeSubPostListRequest } from '../../actions/Posts';
import PostList from '../../components/PostList';

class PostListContainer extends Component {
  componentDidMount() {
    this.props.fetchPostList('nature-stock','new');
  }
  
  render () {
    return <PostList {...this.props} />
  }
}

const mapStateToProps = state => (
  {
    loading: state.postList.loading,
    posts: state.postList.posts,
    error: state.postList.error,
  }
);

const mapDispatchToProps = dispatch => ({
  fetchPostList: (subredditTitle, orderBy) =>
    dispatch(makeSubPostListRequest(subredditTitle, orderBy)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
