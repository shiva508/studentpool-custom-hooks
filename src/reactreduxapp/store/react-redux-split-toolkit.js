import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./counter-slice";
const toolkitsplitstore = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default toolkitsplitstore;
