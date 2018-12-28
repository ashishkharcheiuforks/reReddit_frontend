import React from 'react';

import './styles.css';
import { PanelListLoader } from '../Loaders';
import PostInfoLine from './PostInfoLine';
import CommentTreeListContainer from '../../containers/CommentTreeListContainer';

const PostDetail = (props) => {
  
  const {
    loading
  } = props;
  
  return (
    <div className='post-detail-content'>
      <PostInfoLine title={props.title} poster={props.postPoster} />
      <div className='post-title-container'>
        {props.postTitle}
      </div>
      <div className='post-body-container'>
        <div
          className='body-html'
          dangerouslySetInnerHTML={{__html: props.postBody}}
        />
      </div>
      
      <div className="post-comments-container">
        {loading ? <PanelListLoader/> : <CommentTreeListContainer />}
      </div>
    </div>
  )
}

export default PostDetail;
