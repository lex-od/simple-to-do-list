import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { CARD_COLORS, TODO_TABS } from "./Home.utils";
import TodoItem from "./TodoItem/TodoItem";
import TodoTabs from "./_TodoTabs";
import NoItems from "./_NoItems";

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const todos = useAppSelector(TODO_TABS[tabIndex].selector);

  return (
    <div className="py-8">
      <h1 className="mb-8 text-3xl">Simple Todo List</h1>

      <TodoTabs tabIndex={tabIndex} onChangeTab={setTabIndex} />

      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] gap-4">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            item={todo}
            bgColor={CARD_COLORS[index % CARD_COLORS.length]}
          />
        ))}
        {!todos.length && <NoItems />}
      </ul>
    </div>
  );
};

export default Home;
