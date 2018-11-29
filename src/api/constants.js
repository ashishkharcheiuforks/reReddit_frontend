export const API_ROOT_URL = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEV_API_ROOT
    : process.env.REACT_APP_PROD_API_ROOT;
  
export const SUB_LIST_URL = API_ROOT_URL + 'subreddits/';
export const SUB_DETAIL_URL = (subredditTitle) => (
  SUB_LIST_URL + 'sub/' + subredditTitle + '/'
);

export const USER_LIST_URL = API_ROOT_URL + 'users/';
export const USER_LOGIN_URL = API_ROOT_URL + 'users/login/';
export const USER_REGISTER_URL = API_ROOT_URL + 'users/create/';

export const POST_LIST_URL = API_ROOT_URL + 'posts/';
export const SUB_POST_LIST_URL = (subredditTitle) => (
  POST_LIST_URL + "subreddit-list/" + subredditTitle + '/'
);

  
