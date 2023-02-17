//Hooks
import { motion as m } from "framer-motion";

//CSS
import "../Layout/Administrator/LogInForm";
import "../UI/EmailUs.css";

//Icons
import CloseIcon from "@mui/icons-material/Close";

const Notifications = (notificationConfig, setAction) => {
  return (
    <m.div
      key={notificationConfig.key}
      initial={{ opacity: 0, x: "150%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "150%" }}
      transition={{ duration: 0.7, type: "tween" }}
      className={notificationConfig.className}
    >
      <h4>{notificationConfig.h4}</h4>
      <p>{notificationConfig.p}</p>
      <button
        onClick={() => {
          setAction();
        }}
      >
        <CloseIcon />
      </button>
    </m.div>
  );
};

export default Notifications;
