export const API_ROOT_URL = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEV_API_ROOT
    : process.env.REACT_APP_PROD_API_ROOT
export const USER_LIST_URL = API_ROOT_URL + 'users/'
export const SUB_LIST_URL = API_ROOT_URL + 'subs/'
export const POST_LIST_URL = API_ROOT_URL + 'posts/'

  