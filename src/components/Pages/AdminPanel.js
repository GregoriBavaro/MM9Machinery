//Hooks
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { tokenLoader } from "../Helpers/Auth";

//Components
import LogInForm from "../Layout/Administrator/LogInForm";
import AdminMenu from "../Layout/Administrator/AdminMenu";
import Partners from "../Pages/Partners";
import Clients from "../Pages/Clients";

//CSS
import "../Layout/Administrator/AdminPanel.css";

const AdminPanel = () => {
  return (
    <ProSidebarProvider>
      <div className="admin-panel-container">
        <AdminMenu />
        <Routes>
          <Route path="login" element={<LogInForm />} />
          <Route path="partners" element={<Partners />} />
          <Route path="clients" element={<Clients />} />
        </Routes>
      </div>
    </ProSidebarProvider>
  );
};

export default AdminPanel;
