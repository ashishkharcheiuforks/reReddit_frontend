import React from 'react';

import './styles.css';

const PostDetail = (props) => {
  
  return (
    <div className='post-detail-content'>
      <div className='post-title-container'>
        {props.postTitle}
      </div>
      <div className='post-body-container'>
        {props.postBody}
      </div>
    </div>
  )
}

export default PostDetail;
