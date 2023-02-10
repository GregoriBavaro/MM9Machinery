//Photos
import heroPhotoOne from "../images/hero/hero-banner (1).png";
import heroPhotoTwo from "../images/hero/hero-banner (2).png";
import heroPhotoThree from "../images/hero/hero-banner (3).png";

export const HeroItems = [
  {
    photo: heroPhotoOne,
    index: 1,
    to: "/about-us",
    buttonName: "learn more",
    buttonClass: "btn hero-button",
    promo: "transport",
    backgroundColor: "background-color-slide",
    text: "They contain over 70% recycled material and are 100% recyclable eliminating waste."
  },
  {
    photo: heroPhotoTwo,
    index: 2,
    to: "/contact-us",
    buttonName: "learn more",
    buttonClass: "btn hero-button",
    promo: "cardboard",
    backgroundColor: "background-color-slide",
    text: "Recycled Kraft Paper, in Kraft paper rolls & singleface rolls."
  },
  {
    photo: heroPhotoThree,
    index: 3,
    classSlide: "hero-slide",
    to: "/services",
    buttonName: "learn more",
    buttonClass: "btn hero-button",
    divClass: "promo",
    promo: "laminated",
    backgroundColor: "background-color-slide",
    text: "Your premier solution provider for our point of sale and in-store marketing needs!"
  },
];
