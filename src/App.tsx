import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Layout } from "./layouts/Layout";
import Home from "./components/Home/Home";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";

// Роуты добавления/редактирования сделал для демонстрации роутинга
// Можно было использовать модалку

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.addTodo} element={<AddTodo />} />
        <Route path={routes.editTodo} element={<EditTodo />} />
      </Route>

      <Route path="*" element={<Navigate to={routes.home} />} />
    </Routes>
  );
}

export default App;
