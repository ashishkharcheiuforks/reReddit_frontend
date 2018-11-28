import React from 'react';


import PostSegment from '../PostSegment';
import Loader from '../ListLoader';

const PostList = (props) => {
  const {posts, loading, error} = props;

  
  if (error) {
    return <p> {error} </p>
  }
  
  let postList = null;
  if (loading) {
    postList =  <Loader />;
  } else {
      postList = posts.map((post,idx) => {
        return <PostSegment post={post} key={idx} />
    });
  }
  
  
  return (
    <div>
      <ul>
        {postList}
      </ul>
    </div>
  );
}

export default PostList;
