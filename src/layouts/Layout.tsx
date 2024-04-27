import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="w-[75rem] mx-auto px-4">
      <Outlet />
    </div>
  );
};
