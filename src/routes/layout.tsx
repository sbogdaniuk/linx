import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header";

export const Layout = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="grow">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
