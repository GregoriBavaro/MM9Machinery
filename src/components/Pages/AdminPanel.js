//Hooks
import { Outlet } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Suspense } from "react";

//Components
import AdminMenu from "../Layout/Administrator/AdminMenu";
import Navbar from "../Layout/Header/Navbar";

//CSS
import "../Layout/Administrator/AdminPanel.css";

const AdminPanel = () => {
  
  return (
    <ProSidebarProvider>
      <Suspense>
        <Navbar />
      </Suspense>
      <div className="admin-panel-container">
        <AdminMenu />
        <Outlet />
      </div>
    </ProSidebarProvider>
  );
};

export default AdminPanel;
