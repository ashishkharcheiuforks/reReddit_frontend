import React from 'react';


import PostSegment from '../PostSegment';
import Loader from '../ListLoader';
import './styles.css';

const PostList = (props) => {
  const {posts, loading, error} = props;

  
  if (error) {
    return <p> {error} </p>
  }
  
  let postList = null;
  if (loading) {
    postList =  <Loader />;
  } else {
      postList = posts.map((post) => {
        return <PostSegment post={post} key={post.id} />
    });
  }
  
  
  return (
    <div className='post-list-container'>
      <div className='list-container'>
        <ul className='post-list-ul'>
          {postList}
        </ul>
      </div>
      <div className='sidebar-container'>
        
      </div>
    </div>
  );
}

export default PostList;
