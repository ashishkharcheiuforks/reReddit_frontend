import apiRequestErrorHandler from '../../utilities/apiErrorHandler';

export const apiMiddleware = store => next => action => {
  
  if (action.type && action.type.startsWith("API_")) {
    const {
      callAPI,
      types,
      successActionCreator,
      failureActionCreator,
    } = action;

    typeof types.request === 'function'
      ? store.dispatch(types.request) // let thunk handle it
      : store.dispatch({type: types.request})
    
    
    return callAPI()
      .then(data => typeof types.success === 'function'
        ? types.success(data, store.getState, store.dispatch)
        : store.dispatch({
            type: types.success,
            data
          })
      )
      .then(action => {
        if (successActionCreator){
          return store.dispatch(successActionCreator(action.data))
        }
      })
      .catch(error => {
        const errorMessage = apiRequestErrorHandler(error)
        if (failureActionCreator) {
          store.dispatch(failureActionCreator(errorMessage))
        }
        // In case the original callers are waiting on news of how this went
        // see CreatePost for example
        return Promise.reject(
          store.dispatch({
            type: types.failure,
            error: errorMessage,
          })
        )
      })
  }
  else {
    return next(action)
  }
};
