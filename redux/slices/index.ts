import { combineReducers } from "@reduxjs/toolkit";
import carReducer from "./carSlice/carSlice";

const rootReducer = combineReducers({
  carSlice: carReducer,
});

export default rootReducer;
