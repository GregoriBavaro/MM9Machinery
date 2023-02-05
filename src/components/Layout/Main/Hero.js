//Hooks
import HeroSwiper from "./HeroSwiper"


//Data
import { HeroItems } from "../../../Data/HeroItems"

const Hero = () => {
    return (
         <div className="hero-container-main">
            <HeroSwiper heroContainer="hero-container" array={HeroItems
            }/>
        </div>
    )
}

export default Hero;