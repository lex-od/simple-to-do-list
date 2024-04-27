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
        todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    toggleDeleted: (state, action: PayloadAction<TodoActionPayload>) => {
      const { todoId } = action.payload;
      state.items = state.items.map((todo) =>
        todo.id === todoId ? { ...todo, isDeleted: !todo.isDeleted } : todo
      );
    },
    permanentlyDelete: (state, action: PayloadAction<TodoActionPayload>) => {
      const { todoId } = action.payload;
      state.items = state.items.filter(({ id }) => id !== todoId);
    },
  },
});

export const { addTodo, toggleDone, toggleDeleted, permanentlyDelete } =
  todosSlice.actions;
export default todosSlice.reducer;
