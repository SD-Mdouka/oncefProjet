const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: state.count + action.data,
      };
    case "DEC":
      return {
        ...state,
        count: state.count - action.data,
      };
    default:
      return state;
  }
};

export default counter;
