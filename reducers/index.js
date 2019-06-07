const hello = (state, action) => {
  switch (action.type) {
    case "HELLO":
      return state;
    default:
      return state;
  }
};

export default hello;
