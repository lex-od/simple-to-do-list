import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="max-w-[100rem] mx-auto px-8">
      <Outlet />
    </div>
  );
};
