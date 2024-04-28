import { FC } from "react";
import clsx from "clsx";
import { TODO_TABS } from "./Home.utils";

interface Props {
  tabIndex: number;
  onChangeTab: (newTabIndex: number) => void;
}

const TodoTabs: FC<Props> = ({ tabIndex, onChangeTab }) => {
  return (
    <ul className="mb-4 flex flex-wrap gap-1">
      {TODO_TABS.map((tab, index) => (
        <li key={tab.name}>
          <button
            onClick={() => onChangeTab(index)}
            className={clsx(
              "px-4 py-1 rounded-t hover:bg-indigo-300 transition-colors duration-200",
              index === tabIndex ? "bg-indigo-300" : "bg-indigo-100"
            )}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoTabs;
