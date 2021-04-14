import { createrStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createrStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
