import axios from 'axios';

import { POST_LIST_URL } from '../constants';

const getSubListApi = () => {
  return axios.get(POST_LIST_URL)
          .then(response => response.data)
}

export default getSubListApi