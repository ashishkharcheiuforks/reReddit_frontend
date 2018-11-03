import React from 'react';

import PostSegment from '../PostSegment';

const PostList = (props) => {
  // const {
  //   posts
  // } = this.props;
  
  const posts = [
    {content: "first one"},
    {content: "second one"},
  ]
  
  const postList = posts.map((post,idx) => {
    return <PostSegment post={post} />
  });
  
  
  return (
    postList
  );
}

export default PostList;