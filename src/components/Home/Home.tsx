import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { routes } from "../../routes";
import Button from "../../ui/Button/Button";
import { CARD_COLORS, TODO_TABS } from "./Home.utils";
import TodoItem from "./_TodoItem";
import TodoTabs from "./_TodoTabs";
import NoItems from "./_NoItems";

const Home = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const todos = useAppSelector(TODO_TABS[tabIndex].selector);

  return (
    <div className="py-8">
      <h1 className="mb-8 text-3xl">Simple Todo List</h1>

      <TodoTabs tabIndex={tabIndex} onChangeTab={setTabIndex} />

      <ul className="mb-4 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))]">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            item={todo}
            bgColor={CARD_COLORS[index % CARD_COLORS.length]}
          />
        ))}
        {!todos.length && <NoItems />}
      </ul>

      <div>
        <Button onClick={() => navigate(routes.addTodo)}>Add todo</Button>
      </div>
    </div>
  );
};

export default Home;
