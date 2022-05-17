import * as reducers from "./reducers";
import { combineReducers, applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const todoAppReducer = combineReducers(reducers);

const middleware = [thunkMiddleware];

const store = createStore(
  todoAppReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
