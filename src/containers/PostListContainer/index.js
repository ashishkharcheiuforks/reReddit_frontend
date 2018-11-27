import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makeSubPostListRequest } from '../../actions/Posts';
import PostList from '../../components/PostList';

class PostListContainer extends Component {
  // If undefined converts to null
  componentDidMount() {
    const subredditTitle = this.props.match.params.subredditTitle || null;
      
    this.props.fetchPostList(subredditTitle, 'new');
  }
  
  componentDidUpdate(prevProps) {
    // If undefined converts to null
    const subredditTitle = this.props.match.params.subredditTitle || null;
      
    if (
      this.props.match.params.subredditTitle !==
      prevProps.match.params.subredditTitle
    ) {
      this.props.fetchPostList(subredditTitle, 'new')
    }
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
