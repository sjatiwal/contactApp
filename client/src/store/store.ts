import { Middleware } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./rootreducers";
import thunk from "redux-thunk";

const middleWare: Middleware[] = [thunk];
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWare),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
