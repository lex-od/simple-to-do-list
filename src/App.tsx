import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Layout } from "./layouts/Layout";
import Home from "./components/Home/Home";
import TodoDetails from "./components/TodoDetails/TodoDetails";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        {/* Роут деталей сделан для демонстрации роутинга. Можно было использовать модалку */}
        <Route path={routes.todoDetails} element={<TodoDetails />} />
      </Route>

      <Route path="*" element={<Navigate to={routes.home} />} />
    </Routes>
  );
}

export default App;
