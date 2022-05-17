import * as reducers from "./reducers";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";

const todosReducer = combineReducers(reducers);

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(todosReducer,composeWithDevTools(applyMiddleware(...middlewares)));
// let store = configureStore({
//   reducer: todosReducer,
// }, applyMiddleware(logger));

export default store;
