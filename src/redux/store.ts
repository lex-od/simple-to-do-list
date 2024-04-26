import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
