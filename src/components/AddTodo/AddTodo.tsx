import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useAppDispatch } from "../../hooks/redux";
import { addTodo } from "../../redux/todos/todosSlice";
import TodoForm, { TodoFormValues } from "../TodoForm/TodoForm";

const AddTodo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: TodoFormValues) => {
    const todoData = {
      id: nanoid(),
      ...values,
    };
    dispatch(addTodo({ todoData }));
    navigate("/");
  };

  return (
    <div className="py-8">
      <h1 className="mb-8 text-3xl">Add todo</h1>

      <TodoForm onSubmit={handleSubmit} onCancel={() => navigate("/")} />
    </div>
  );
};

export default AddTodo;
