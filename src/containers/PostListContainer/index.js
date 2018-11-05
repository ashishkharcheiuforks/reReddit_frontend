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

const mapStateToProps = state => {
  
  return  ({
    loading: state.PostList.loading,
    posts: state.PostList.posts,
    error: state.PostList.error,
    });
}

const mapDispatchToProps = dispatch => ({
  fetchPostList: () => dispatch(fetchPostList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);