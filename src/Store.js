import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducer/RootReducer";

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
