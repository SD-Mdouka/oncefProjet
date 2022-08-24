const counter = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + action.data;
    case "DEC":
      return state - action.data;
    default:
      return state;
  }
};

export default counter;
