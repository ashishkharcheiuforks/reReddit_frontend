import axios from "axios";

import { USER_PROFILE_URL } from "../constants";

export const getUserProfileApi = username =>
  axios.get(USER_PROFILE_URL(username)).then(response => response.data);
