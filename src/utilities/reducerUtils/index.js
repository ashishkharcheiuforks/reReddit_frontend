// Help organize reducers
export function combineReducersWithRoot(rootReducer, reducers) {
  return (state, action) => {
    let newState = {...rootReducer(state, action)};
    Object.keys(reducers).forEach((prop) => {
      let propObj = state ? state[prop] : undefined;
      newState[prop] = reducers[prop](propObj, action);
    });
    return newState;
  }
}

// Update, avoid mutation
export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues)
}
