import React from 'react';

import PostSegment from '../PostSegment';
import Loader from '../ListLoader';
import './styles.css';

const PostList = (props) => {
  const {posts, loading, error} = props;

  
  if (error) {
    return <p> {error} </p>
  }
  
  let postList;
  if (loading) {
    postList =  <Loader />;
  } else {
      postList = posts.map((post) => {
        return <PostSegment post={post} key={post.pk} />
    });
  }
  
  return (
    <div className='postlist-content'>
      <ul>
        {postList}
      </ul>
    </div>
  );
}

export default PostList;
