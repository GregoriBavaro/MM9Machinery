//Hooks
import { useTranslation } from "react-i18next";


//Data
import notFound from "../../images/404.png";

const NotFound = () => {
    const { t } = useTranslation();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem"
      }}
    >
      <h1 style={{ textTransform: "uppercase", color: "rgb(87, 191, 134)", fontSize: "4vw"}}>
        {t("not_found")}
      </h1>
      <img src={notFound} style={{ width: "100%" }} alt="404img"/>
    </div>
  );
};

export default NotFound;
