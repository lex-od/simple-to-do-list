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

export type TodoData = Omit<TodoItem, "isDone" | "isDeleted">;
export interface AddEditTodoPayload {
  todoData: TodoData;
}

export interface TodoActionPayload {
  todoId: string;
}
