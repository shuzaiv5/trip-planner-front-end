import { configureStore } from "@reduxjs/toolkit";
import { plansReducer } from "./Reducers";

export const store = configureStore({
  reducer: {
    plans: plansReducer
  },middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

