const INIT_DATA = {
  data: []
};

const reducer = (state = INIT_DATA, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, loading: true };
    case "RECIEVED_DATA":
      return { ...state, data: action.payload, loading: false };
    case "ADD_DATA":
        return{...state,data:action.payload,loading:false};
    default:
      return state;
  }
};
export default reducer;
