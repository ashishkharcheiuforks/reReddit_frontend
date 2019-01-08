export const SEARCH_URL = '/search';

// compare urls disregarding the trailing slash
export const urlMatch = (first, second) => {
  return first === second || `${first}/` === second || first === `${second}/`;
}
