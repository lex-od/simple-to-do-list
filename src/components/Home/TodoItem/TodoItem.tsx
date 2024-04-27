import { FC } from "react";
import { TodoItem as TodoItemType } from "../../../redux/todos/todosTypes";
import TodoActions from "./_TodoActions";

interface Props {
  item: TodoItemType;
  bgColor: string;
}

const TodoItem: FC<Props> = ({ item, bgColor }) => {
  return (
    <li
      className="min-h-64 px-4 py-2 rounded-xl"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="mb-1 text-xl">{item.title}</h2>

      <TodoActions todoItem={item} />

      <p>{item.text}</p>
    </li>
  );
};

export default TodoItem;
