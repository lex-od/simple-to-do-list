import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AddTodoPayload, TodosState } from "./todosTypes";

const initialState: TodosState = {
  items: [
    { id: "01", text: "My text 1" },
    { id: "02", text: "My text 2" },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
      const { newTodo } = action.payload;
      state.items = [newTodo, ...state.items];
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
