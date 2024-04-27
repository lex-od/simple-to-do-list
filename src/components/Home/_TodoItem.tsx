import { FC } from "react";
import { TodoItem as TodoItemType } from "../../redux/todos/todosTypes";
import { Circle, CircleCheckBig, Trash } from "lucide-react";

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

      <div className="mb-1 flex gap-2">
        <button>{item.isCompleted ? <CircleCheckBig /> : <Circle />}</button>
        <button>
          <Trash />
        </button>
      </div>

      <p>{item.text}</p>
    </li>
  );
};

export default TodoItem;
