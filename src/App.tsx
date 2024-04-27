import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Layout } from "./layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path={routes.todoDetails} element={<div>TODO details</div>} />
      </Route>

      <Route path="*" element={<Navigate to={routes.home} />} />
    </Routes>
  );
}

export default App;
