//Hooks
import { Fragment } from "react";

//Components
import LogInForm from "../Layout/Administrator/LogInForm";

const AdminPanel = () => {
  return (
    <Fragment>
      <div className="admin-panel-container">
        <LogInForm />
      </div>
    </Fragment>
  );
};

export default AdminPanel;
