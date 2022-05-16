import * as reducers from './reducers';
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';


const todosReducer = combineReducers(reducers);
const store = configureStore({ reducer: todosReducer });

export default store;