import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header";

export const Layout = () => {
  return (
    <div className="w-full">
      <Sidebar className='w-16 md:w-[200px]' />
      <div className="ml-16 md:ml-[200px]">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
