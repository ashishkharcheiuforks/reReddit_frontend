import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_REQUEST_SUCCESS,
  FETCH_USERS_REQUEST_FAILURE
} from './actionTypes';

export fetchUsers = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

