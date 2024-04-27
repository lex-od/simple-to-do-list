import { FC } from "react";
import { ArchiveRestore, Circle, CircleCheckBig, Trash } from "lucide-react";
import { TodoItem } from "../../../redux/todos/todosTypes";
import IconButton from "../../IconButton/IconButton";
import { useAppDispatch } from "../../../hooks/redux";
import {
  permanentlyDelete,
  toggleDeleted,
  toggleDone,
} from "../../../redux/todos/todosSlice";

interface Props {
  item: TodoItem;
}

const TodoActions: FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="mb-1 flex gap-2">
      <IconButton
        title={item.isDone ? "Unmark done" : "Mark done"}
        onClick={() => dispatch(toggleDone({ todoId: item.id }))}
      >
        {item.isDone ? <CircleCheckBig /> : <Circle />}
      </IconButton>

      <IconButton
        title={item.isDeleted ? "Restore" : "Delete"}
        onClick={() => dispatch(toggleDeleted({ todoId: item.id }))}
      >
        {item.isDeleted ? <ArchiveRestore /> : <Trash />}
      </IconButton>

      {item.isDeleted && (
        <IconButton
          title="Permanently delete"
          onClick={() => dispatch(permanentlyDelete({ todoId: item.id }))}
        >
          <Trash />
        </IconButton>
      )}
    </div>
  );
};

export default TodoActions;
