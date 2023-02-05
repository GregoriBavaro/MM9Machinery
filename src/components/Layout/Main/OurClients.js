//Hooks
// import { useTranslation } from "react-i18next";

//Components
import BrandsSwiper from "./BrandsSwiper";

//Css
import "./OurClients.css"

//Imgs
import brand1 from "../../../images/brands/burger-king.png"
import brand3 from "../../../images/brands/coca-cola.png"
import brand4 from "../../../images/brands/redbull.png"
import brand5 from "../../../images/brands/mcdonalds.png"
import brand6 from "../../../images/brands/hummer.png"


const brands = [brand1, brand3, brand4, brand5, brand6];


const OurClients = () => {
    // const { t } = useTranslation();

    return (
        <div className="clients-container">
            <h3>Trusted by brands</h3>
            <BrandsSwiper  logo={brands}/>
        </div>
    )
}

export default OurClients;