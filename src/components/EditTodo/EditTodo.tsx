import { useNavigate, useParams } from "react-router-dom";
import { getTodoById } from "../../redux/todos/todosSelectors";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  editTodo,
  permanentlyDelete,
  toggleDeleted,
  toggleDone,
} from "../../redux/todos/todosSlice";
import TodoForm, { TodoFormValues } from "../../ui/TodoForm/TodoForm";
import TodoActions from "../../ui/TodoActions/TodoActions";
import { routes } from "../../routes";

const EditTodo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { todoId } = useParams();
  const todo = useAppSelector((state) => getTodoById(state, todoId as string));

  const handleSubmit = (values: TodoFormValues) => {
    const todoData = {
      id: todo?.id as string,
      ...values,
    };
    dispatch(editTodo({ todoData }));
    navigate(routes.home);
  };

  const handlePermanentlyDelete = () => {
    dispatch(permanentlyDelete({ todoId: todo?.id as string }));
    navigate(routes.home);
  };

  return (
    <div className="py-8">
      <h1 className="mb-8 text-3xl">Edit todo</h1>

      {todo ? (
        <>
          <TodoActions
            className="max-w-xl mb-4 px-2 py-1 rounded-md bg-indigo-300"
            item={todo}
            onChangeDone={() => dispatch(toggleDone({ todoId: todo.id }))}
            onChangeDeleted={() => dispatch(toggleDeleted({ todoId: todo.id }))}
            onPermanentlyDelete={handlePermanentlyDelete}
          />
          <TodoForm
            onSubmit={handleSubmit}
            onCancel={() => navigate(routes.home)}
            initValues={todo}
          />
        </>
      ) : (
        <p>No such todo found</p>
      )}
    </div>
  );
};

export default EditTodo;
