export const SEARCH_URL = "/search";

export const SUBREDDIT_URL = title => `/r/${title}`;
export const HOME_SUBREDDIT_URL = "";
export const CREATE_SUBREDDIT_URL = `/createSubreddit`;

export const CREATE_POST_URL = subredditTitle =>
  `/r/${subredditTitle}/createPost`;
export const POST_DETAIL_URL = (subredditTitle, postPk) =>
  `/r/${subredditTitle}/postDetail/${postPk}`;

// compare urls disregarding the trailing slash
export const urlMatch = (first, second) => {
  return first === second || `${first}/` === second || first === `${second}/`;
};
