import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makeSubPostListRequest, setPostListSub } from '../../actions/Posts';
import PostList from '../../components/PostList';

class PostListContainer extends Component {
  componentDidMount() {
    const subredditTitle = Object.is(
      this.props.match.params.subredditTitle,
      undefined) ?
      null:
      this.props.match.params.subredditTitle;
    
    this.props.setPostListSub(subredditTitle);
      
    this.props.fetchPostList(subredditTitle, 'new');
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
  setPostListSub: (subredditTitle) => dispatch(setPostListSub(subredditTitle)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
