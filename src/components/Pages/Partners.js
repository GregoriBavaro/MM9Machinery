//Hooks
import { json } from "react-router-dom";

//Components
import EditPartners from "../Layout/Administrator/EditPartners";

const Partners = () => {
  return (
    <div className="admin-responsive-container">
      <EditPartners />
    </div>
  );
};

export default Partners;

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