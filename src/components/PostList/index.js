import React from 'react';
import { withRouter } from 'react-router';

import PostPanelContainer from '../../containers/PostPanelContainer';
import { ErrorAlert } from '../AlertMessage';
import { PanelListLoader } from '../Loaders';
import EmptyPostList from './EmptyPostList';
import { SEARCH_URL, urlMatch } from '../../urls';
import './styles.css';

const PostList = (props) => {
  const {
    loading,
    error,
    allPosts,
    match: {
      url
    }
  } = props;

  // Is this the list of posts for a subreddit or for search results?
  const usage = urlMatch(SEARCH_URL, url) ? 'search' : 'subreddit';
  
  if (error) {
    return(
      <ErrorAlert>
        {error}
      </ErrorAlert>
    )
  }
  
  let postList;
  if (loading) {
    postList =  <PanelListLoader panelNumber={8}/>;
  } else if (allPosts.length === 0 ){
    postList = <EmptyPostList />;
  } else{
      const postPanels = allPosts.map((postPk) => {
        return <PostPanelContainer postPk={postPk} key={postPk} usage={usage}/>});
      postList = <ul>{postPanels}</ul>
  }
  
  return (
    <div className='postlist-content'>
        {postList}
    </div>
  );
}

export default withRouter(PostList);
