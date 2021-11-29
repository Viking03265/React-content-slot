import { combineReducers } from "redux";
import product from "./productReducer";

const combinedReducer = combineReducers({
  product
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
