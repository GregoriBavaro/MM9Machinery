import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


const Notifications = () => {


  const { t } = useTranslation();

  const notify200 = () =>
    toast.success(t("email_notification_200"), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notify400 = () =>
    toast.error(t("email_notification_400"), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return {
    notify200,
    notify400,
  };
};

export default Notifications;
