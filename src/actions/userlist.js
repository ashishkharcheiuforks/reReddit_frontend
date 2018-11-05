import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './actionTypes';

import { getUserListApi } from '../api/users'

export const fetchUserList = () => dispatch => {
  // state is set to show that we are loading them from api
  dispatch(fetchUsersRequest)
  
  // Now actually send the request and deal with it
  getUserListApi()
    .then(data => dispatch(fetchUsersSuccess(data)))
    .catch(error => dispatch(fetchUsersFailure(error)));
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    users: data
  }
}

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    error
  }
}