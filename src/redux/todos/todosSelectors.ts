import { RootState } from "../store";

export const getAllTodos = (state: RootState) => state.todos.items;
