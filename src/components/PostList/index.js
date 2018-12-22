import React from 'react';

import PostPanelContainer from '../../containers/PostPanelContainer';
import Loader from '../ListLoader';
import './styles.css';

const PostList = (props) => {
  const {posts, loading, error, allPosts} = props;

  
  if (error) {
    return <p> {error} </p>
  }
  
  let postList;
  if (loading) {
    postList =  <Loader />;
  } else {
      postList = allPosts.map((postPk) => {
        return <PostPanelContainer postPk={postPk} key={postPk}/>
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
