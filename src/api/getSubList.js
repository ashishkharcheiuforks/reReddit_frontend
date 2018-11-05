import axios from 'axios';

import { SUB_LIST_URL } from './constants';

export default const getSubListApi = () => {
  return axios.get(SUB_LIST_URL)
          .then(response => response.data)
}