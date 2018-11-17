export const apiMiddleware = store => next => action => {
  if (action.type && action.type.startsWith("API_")) {
    const {
      callAPI,
      types,
      successAction,
    } = action;
    
    store.dispatch({type: types.request})
    
    return callAPI()
      .then(data => store.dispatch({
        type: types.success,
        data
      }))
      .then( () => store.dispatch(successAction))
      .catch(error => store.dispatch({
        type: types.failure,
        error
      }))
  }
  else {
    return next(action)
  }
};
