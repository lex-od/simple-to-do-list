import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useAppDispatch } from "../../hooks/redux";
import { addTodo } from "../../redux/todos/todosSlice";
import { routes } from "../../routes";
import TodoForm, { TodoFormValues } from "../../ui/TodoForm/TodoForm";

const AddTodo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: TodoFormValues) => {
    const todoData = {
      id: nanoid(),
      ...values,
    };
    dispatch(addTodo({ todoData }));
    navigate(routes.home);
  };

  return (
    <div className="py-8">
      <h1 className="mb-8 text-3xl">Add todo</h1>

      <TodoForm
        onSubmit={handleSubmit}
        onCancel={() => navigate(routes.home)}
      />
    </div>
  );
};

export default AddTodo;
