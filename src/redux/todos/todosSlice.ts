import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AddTodoPayload, TodoActionPayload, TodosState } from "./todosTypes";
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

    toggleDone: (state, action: PayloadAction<TodoActionPayload>) => {
      const { todoId } = action.payload;
      state.items = state.items.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    },
  },
});

export const { addTodo, toggleDone } = todosSlice.actions;
export default todosSlice.reducer;
