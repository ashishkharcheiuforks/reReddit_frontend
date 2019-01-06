import axios from 'axios';

import { SEARCH_URL } from '../constants'

export const searchApi = (q) => (
  axios.get(SEARCH_URL, {params: { q, }, })
    .then(response => response.data)
)
