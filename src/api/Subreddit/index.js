import axios from 'axios';

import { SUB_DETAIL_URL, SUB_SUBSCRIBE_URL } from '../constants';

export const getSubDetailApi = (subredditTitle) => (
  axios.get(SUB_DETAIL_URL(subredditTitle))
  .then(response => response.data)
)

export const subredditSubscribeApi = (subredditTitle, token) => {
  
  const headers = {'Authorization': `Token ${token}`,}
  const data = {action: 'sub',}
  
  return (
    axios.post(SUB_SUBSCRIBE_URL(subredditTitle), data, {headers:headers})
  )
}
