import { FC } from "react";
import { ArchiveRestore, Circle, CircleCheckBig, Trash } from "lucide-react";
import { TodoItem } from "../../../redux/todos/todosTypes";
import IconButton from "../../IconButton/IconButton";

interface Props {
  todoItem: TodoItem;
}

const TodoActions: FC<Props> = ({ todoItem }) => {
  return (
    <div className="mb-1 flex gap-2">
      <IconButton title={todoItem.isCompleted ? "Unmark done" : "Mark done"}>
        {todoItem.isCompleted ? <CircleCheckBig /> : <Circle />}
      </IconButton>

      {todoItem.isDeleted && (
        <IconButton title="Restore">
          <ArchiveRestore />
        </IconButton>
      )}

      <IconButton title={todoItem.isDeleted ? "Permanently delete" : "Delete"}>
        <Trash />
      </IconButton>
    </div>
  );
};

export default TodoActions;
