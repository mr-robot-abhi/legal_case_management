import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

type LayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 flex-1 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
