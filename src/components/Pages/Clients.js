//Hooks
import { json } from "react-router-dom";

//Components
import EditClients from "../Layout/Administrator/EditClients";

const Clients = () => {
  return (
    <div className="admin-responsive-container">
      <EditClients />
    </div>
  );
};

export default Clients;

export async function loader() {
  const response = await fetch(
    "https://mm9m-post-form-default-rtdb.firebaseio.com/user.json"
  );
  if (!response.ok) {
    return json({ message: "Could not fetch data" }, { status: 500 });
  } else {
    return response;
  }
}
