export interface TodoItem {
  id: string;
  title: string;
  text: string;
  isDone: boolean;
  isDeleted: boolean;
}
export interface TodosState {
  items: TodoItem[];
}

export type NewTodo = Omit<TodoItem, "isCompleted" | "isDeleted">;
export interface AddTodoPayload {
  newTodo: NewTodo;
}

export interface TodoActionPayload {
  todoId: string;
}
