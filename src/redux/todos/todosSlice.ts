import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  AddEditTodoPayload,
  TodoActionPayload,
  TodosState,
} from "./todosTypes";
import mockedTodos from "./mockedTodos.json";

const initialState: TodosState = {
  items: mockedTodos,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddEditTodoPayload>) => {
      const todoItem = {
        ...action.payload.todoData,
        isDone: false,
        isDeleted: false,
      };
      state.items = [todoItem, ...state.items];
    },
    editTodo: (state, action: PayloadAction<AddEditTodoPayload>) => {
      const { todoData } = action.payload;
      state.items = state.items.map((todo) =>
        todo.id === todoData.id ? { ...todo, ...todoData } : todo
      );
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

export const {
  addTodo,
  editTodo,
  toggleDone,
  toggleDeleted,
  permanentlyDelete,
} = todosSlice.actions;
export default todosSlice.reducer;
