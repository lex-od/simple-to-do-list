import * as todosSls from "../../redux/todos/todosSelectors";

export const CARD_COLORS = [
  "#f87171",
  "#fbbf24",
  "#a3e635",
  "#34d399",
  "#22d3ee",
  "#60a5fa",
  "#a78bfa",
];

export const TODO_TABS = [
  {
    name: "actual",
    title: "Actual",
    selector: todosSls.getActualTodos,
  },
  {
    name: "undone",
    title: "Undone",
    selector: todosSls.getUndoneTodos,
  },
  {
    name: "done",
    title: "Done",
    selector: todosSls.getDoneTodos,
  },
  {
    name: "deleted",
    title: "Deleted",
    selector: todosSls.getDeletedTodos,
  },
];
