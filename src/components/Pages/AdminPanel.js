//Hooks
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Suspense, useEffect } from "react";
import { getTokenDuration } from "../Helpers/Auth";
//Components
import AdminMenu from "../Layout/Administrator/AdminMenu";
import Navbar from "../Layout/Header/Navbar";

//CSS
import "../Layout/Administrator/AdminPanel.css";

const AdminPanel = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }
    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
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
