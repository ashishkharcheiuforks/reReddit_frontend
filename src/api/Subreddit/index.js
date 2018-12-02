import axios from 'axios';

import { SUB_DETAIL_URL, SUB_SUBSCRIBE_URL } from '../constants';
import { tokenContextObj } from '../apiUtils';

export const getSubDetailApi = (subredditTitle) => (
  axios.get(SUB_DETAIL_URL(subredditTitle))
  .then(response => response.data)
)

export const subredditSubscribeApi = (subredditTitle, subAction, token) => {
  const data = {action: subAction,}
  return (
    axios.post(SUB_SUBSCRIBE_URL(subredditTitle), data, tokenContextObj(token))
  )
}
