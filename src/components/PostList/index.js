import React from 'react';

import PostSegment from '../PostSegment';
import Loader from '../ListLoader';
import './styles.css';
import SideBar from './SideBar';

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
        return <PostSegment post={post} key={post.id} />
    });
  }
  
  return (
    <div className='post-list-container'>
      <div className='list-container'>
        <ul>
          {postList}
        </ul>
      </div>
      <SideBar {...props} />
    </div>
  );
}

export default PostList;
