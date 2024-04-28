import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TodoItem as TodoItemType } from "../../../redux/todos/todosTypes";
import { useAppDispatch } from "../../../hooks/redux";
import {
  permanentlyDelete,
  toggleDeleted,
  toggleDone,
} from "../../../redux/todos/todosSlice";
import TodoActions from "./_TodoActions";

interface Props {
  item: TodoItemType;
  bgColor: string;
}

const TodoItem: FC<Props> = ({ item, bgColor }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <li
      className="min-h-64 p-4 rounded-xl cursor-pointer"
      style={{ backgroundColor: bgColor }}
      // Это не ссылка, т. к. семантически нельзя вкладывать <button> в <a>
      onClick={() => navigate(`/todo-details/${item.id}`)}
    >
      <h2 className="mb-1 text-xl">{item.title}</h2>

      <TodoActions
        item={item}
        onChangeDone={() => dispatch(toggleDone({ todoId: item.id }))}
        onChangeDeleted={() => dispatch(toggleDeleted({ todoId: item.id }))}
        onPermanentlyDelete={() =>
          dispatch(permanentlyDelete({ todoId: item.id }))
        }
      />

      <p>{item.text}</p>
    </li>
  );
};

export default TodoItem;
