import { useNavigate, useParams } from "react-router-dom";
import { getTodoById } from "../../redux/todos/todosSelectors";
import { useAppSelector } from "../../hooks/redux";
import TodoForm, { TodoFormValues } from "../TodoForm/TodoForm";

const TodoDetails = () => {
  const navigate = useNavigate();
  const { todoId } = useParams();
  const todo = useAppSelector((state) => getTodoById(state, todoId as string));

  const handleSubmit = (values: TodoFormValues) => {
    //
  };

  return (
    <div className="py-8">
      <h1 className="mb-8 text-3xl">Edit todo</h1>

      {todo ? (
        <TodoForm
          onSubmit={handleSubmit}
          onCancel={() => navigate("/")}
          initValues={todo}
        />
      ) : (
        <p>No such todo found</p>
      )}
    </div>
  );
};

export default TodoDetails;
