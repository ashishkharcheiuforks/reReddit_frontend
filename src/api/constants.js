export const API_ROOT_URL = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEV_API_ROOT
    : process.env.REACT_APP_PROD_API_ROOT;
  
export const SUB_LIST_URL = API_ROOT_URL + 'subreddits/';
export const SUB_DETAIL_URL = (subredditTitle) => (
  SUB_LIST_URL + 'sub/' + subredditTitle + '/'
);
export const SUB_SUBSCRIBE_URL = (subredditTitle) => (
  SUB_LIST_URL + 'sub/' + subredditTitle + '/subscribe/'
);

export const USER_LIST_URL = API_ROOT_URL + 'users/';
export const USER_LOGIN_URL = USER_LIST_URL + 'login/';
export const USER_LOGOUT_URL = USER_LIST_URL + 'logout/';
export const USER_REGISTER_URL = USER_LIST_URL + 'create/';
export const USER_DETAIL_URL = (username) =>
  USER_LIST_URL + `user/${username}/`;
  

export const POST_LIST_URL = API_ROOT_URL + 'posts/';
export const SUB_POST_LIST_URL = (subredditTitle) => (
  POST_LIST_URL + "subreddit-list/" + subredditTitle + '/'
);
export const CREATE_POST_URL = (subredditTitle) => (
  SUB_DETAIL_URL(subredditTitle) + 'post/'
)
export const POST_DETAIL_URL = (postId) => POST_LIST_URL + postId + '/';
