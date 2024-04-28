import { FC } from "react";
import { ArchiveRestore, Circle, CircleCheckBig, Trash } from "lucide-react";
import { TodoItem } from "../../../redux/todos/todosTypes";
import IconButton from "../../IconButton/IconButton";

interface Props {
  item: TodoItem;
  onChangeDone: () => void;
  onChangeDeleted: () => void;
  onPermanentlyDelete: () => void;
}

const TodoActions: FC<Props> = ({
  item,
  onChangeDone,
  onChangeDeleted,
  onPermanentlyDelete,
}) => {
  return (
    <div
      className="mb-1 flex gap-2 cursor-auto"
      // Предотвращаем переход по клику на карточке
      onClick={(e) => e.stopPropagation()}
    >
      <IconButton
        title={item.isDone ? "Unmark done" : "Mark done"}
        onClick={onChangeDone}
      >
        {item.isDone ? <CircleCheckBig /> : <Circle />}
      </IconButton>

      <IconButton
        title={item.isDeleted ? "Restore" : "Delete"}
        onClick={onChangeDeleted}
      >
        {item.isDeleted ? <ArchiveRestore /> : <Trash />}
      </IconButton>

      {item.isDeleted && (
        <IconButton title="Permanently delete" onClick={onPermanentlyDelete}>
          <Trash />
        </IconButton>
      )}
    </div>
  );
};

export default TodoActions;
