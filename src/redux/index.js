import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { App } from "./reducers";

const store = configureStore({
  reducer: combineReducers({ App }),
  middleware: [thunk],
});

export default store;
