import axios from 'axios';

import { SUB_DETAIL_URL } from '../constants';

export const getSubDetailApi = (subredditTitle) => (
  axios.get(SUB_DETAIL_URL(subredditTitle))
  .then(response => response.data)
)
