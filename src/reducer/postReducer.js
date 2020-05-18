export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload.value;
    default:
      return state;
  }
};
