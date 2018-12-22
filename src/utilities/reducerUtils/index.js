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

// Pretty much just for comments and posts
export function updateObjectOnVote(oldObj, voteType) {
  const voteState = oldObj.voteDisplayState || 0;
  const newVoteState = voteType
  
  const upvotes = oldObj.upvotes;
  const newUpvotes = upvotes + (newVoteState - voteState)
    
  return ({
    ...oldObj,
    voteDisplayState: newVoteState,
    upvotes: newUpvotes,
  });
}
