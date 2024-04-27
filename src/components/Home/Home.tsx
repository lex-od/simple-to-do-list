import { useAppSelector } from "../../hooks/redux";
import { getAllTodos } from "../../redux/todos/todosSelectors";
import { CARD_COLORS } from "./Home.utils";
import TodoItem from "./TodoItem/TodoItem";

const Home = () => {
  const todos = useAppSelector(getAllTodos);

  return (
    <div className="py-8">
      <h1 className="mb-8 text-3xl">Simple Todo List</h1>

      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] gap-4">
        {todos.map((item, index) => (
          <TodoItem
            key={item.id}
            item={item}
            bgColor={CARD_COLORS[index % CARD_COLORS.length]}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
