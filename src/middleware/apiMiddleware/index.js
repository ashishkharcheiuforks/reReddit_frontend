export const apiMiddleware = store => next => action => {
  if (action.type && action.type.startsWith("API_")) {
    const {
      callAPI,
      types,
    } = action;
    
    store.dispatch({type: types.request})
    
    callAPI()
    .then(data => store.dispatch({
      type: types.success,
      data
    }))
    .catch(error => store.dispatch({
      type: types.failure,
      error
    }))
  }
  else {
    return next(action)
  }
};
