import * as constant from "../constants";

const INITIAL_STATE = {
  list: [],
  name: [],
};

const App = (state = "INITIAL_STATE", action) => {
  switch (action.type) {
    case constant.SET_APP:
      return { ...state, list: action.payload };
      break;
    case constant.SET_NICKNAME:
      return { name: action.payload };

    default:
      return state;
      break;
  }
};
export { App };
