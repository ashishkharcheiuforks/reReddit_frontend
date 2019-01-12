export const SEARCH_URL = "/search";

export const SUBREDDIT_URL = title => `/r/${title}`;
export const HOME_SUBREDDIT_URL = "";

// compare urls disregarding the trailing slash
export const urlMatch = (first, second) => {
  return first === second || `${first}/` === second || first === `${second}/`;
};
