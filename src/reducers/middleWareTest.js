
const initialState = {
  change: false,
}

const middleWareTest = (state=initialState, action) => {
  switch (action.type) {
    case 'API_FETCH_SUB_LIST':
      return {
        ...state,
        change: !state.change,
      };
    default:
      return state;
  }
}

export default middleWareTest;
