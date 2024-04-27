import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AddTodoPayload, TodosState } from "./todosTypes";
import mockedTodos from "./mockedTodos.json";

const initialState: TodosState = {
  items: mockedTodos,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
      const todoItem = {
        ...action.payload.newTodo,
        isCompleted: false,
        isDeleted: false,
      };
      state.items = [todoItem, ...state.items];
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
