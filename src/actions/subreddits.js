import {
  FETCH_SUBS_REQUEST,
  FETCH_SUBS_SUCCESS,
  FETCH_SUBS_FAILURE
} from './actionTypes';

import getSubListApi from '../api/getSubList';

export const fetchSubList = () => dispatch => {
  dispatch(fetchSubsRequest())
  
  getSubListApi()
  .then(data => dispatch(fetchSubsSuccess(data)))
  .catch(error => dispatch(fetchSubsFailure(error)));
}


export const fetchSubsRequest = () => (
  {type: FETCH_SUBS_REQUEST}
);

export const fetchSubsSuccess= (data) => (
  {
    type: FETCH_SUBS_SUCCESS,
    subs: data
  }
);

export const fetchSubsReques = (error) => (
  {
    type: FETCH_SUBS_SUCCESS,
    error
  }
);

