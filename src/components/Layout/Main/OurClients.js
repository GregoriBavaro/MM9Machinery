//Hooks
import { useTranslation } from "react-i18next";

//Components
import BrandsSwiper from "./BrandsSwiper";

//Css
import "./OurClients.css"

//Data
import data from "../../../Data/partnersAndClients.json";

const clients = [...data.clients];

const OurClients = () => {
    const { t } = useTranslation();

    return (
        <div className="clients-container">
            <h3>{t("trusted_by_brands")}</h3>
            <BrandsSwiper  logo={clients} />
        </div>
    )
}

export default OurClients;