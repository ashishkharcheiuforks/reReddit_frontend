import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchPostList from '../../actions/Posts';
import PostList from '../../components/PostList';

class PostListContainer extends Component {
  componentDidMount() {
    this.props.fetchPostList();
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
  fetchPostList: () => dispatch(fetchPostList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);