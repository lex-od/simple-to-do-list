export interface TodoItem {
  id: string;
  text: string;
}

export interface TodosState {
  items: TodoItem[];
}

export type NewTodo = TodoItem;

export interface AddTodoPayload {
  newTodo: NewTodo;
}
