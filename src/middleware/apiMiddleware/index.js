import apiRequestErrorHandler from '../../utilities/apiErrorHandler';

export const apiMiddleware = store => next => action => {
  if (action.type && action.type.startsWith("API_")) {
    const {
      callAPI,
      types,
      successActionCreator,
      failureActionCreator,
    } = action;
    
    store.dispatch({type: types.request})
    
    return callAPI()
      .then(data => store.dispatch({
        type: types.success,
        data
      }))
      .then(action => {
        console.log(successActionCreator(action.data))
        if (successActionCreator){
          return store.dispatch(successActionCreator(action.data))
        }
      })
      .catch(error => {
        const errorMessage = apiRequestErrorHandler(error)

        if (failureActionCreator) {
          store.dispatch(failureActionCreator(errorMessage))
        }
        return store.dispatch({
          type: types.failure,
          error: errorMessage,
        })
      })
  }
  else {
    return next(action)
  }
};
