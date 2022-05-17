import * as reducers from "./reducers";
import { combineReducers, applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const appReducer = combineReducers(reducers);

const middleware = [thunkMiddleware];

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.asyncReducers = {};

const createInjectReducer = (store) => (key, reducer) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(
    combineReducers({ ...reducers, ...store.asyncReducers })
  );
};

export const injectReducer = createInjectReducer(store);

export default store;
