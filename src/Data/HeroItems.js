

//Photos
import heroPhotoOne from "../images/hero/hero (1).jpg";
import heroPhotoTwo from "../images/hero/hero (2).jpg";
import heroPhotoThree from "../images/hero/hero (3).jpg";



export const HeroItems = [
    {
        photo: heroPhotoOne,
        index: 1,
        classImg: "hero-img clipPath",
        classSlide: "hero-slide",
        to: "/about-us",
        buttonName: "about_us",
        buttonClass: "btn hero-button",
        divClass: "promo",
        promo: "reliable"
        
    },
    {
        photo: heroPhotoTwo,
        index: 2,
        classImg: "hero-img clipPath",
        classSlide: "hero-slide",
        to: "/contact-us",
        buttonName: "contact",
        buttonClass: "btn hero-button",
        divClass: "promo",
        promo: "responsive"
        
    },
    {
        photo: heroPhotoThree,
        index: 3,
        classImg: "hero-img clipPath",
        classSlide: "hero-slide",
        to: "/services",
        buttonName: "services",
        buttonClass: "btn hero-button",
        divClass: "promo",
        promo: "custom"
        
    }
]