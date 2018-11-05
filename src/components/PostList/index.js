import React from 'react';


import PostSegment from '../PostSegment';
import Loader from '../ListLoader';

const PostList = (props) => {
  const {posts, loading, error} = props;

  if (loading) {
    return <Loader />
  }
  
  if (error) {
    return <p> error.message </p>
  }
  
  const postList = posts.map((post,idx) => {
    return <PostSegment post={post} key={idx} />
  });
  
  
  return (
    <div>
      <h2> Posts: </h2>
      <ul>
        {postList}
      </ul>
    </div>
  );
}

export default PostList;