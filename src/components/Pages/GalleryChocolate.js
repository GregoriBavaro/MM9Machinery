//Hooks
import { nameContext } from "../Hooks/Context";

//Components
import Gallery from "../UI/Gallery";
import NameOfPageContainer from "../UI/NameOfPageContainer";
import ScrollToTop from "../Helpers/ScrollToTop";
import BackToTopButton from "../UI/BackToTopButton";

//Data
import data from "../../Data/images.json";

const GalleryChocolate = () => {
  const currentPageName = "gallery_one";
  const previousPageLink = "/about-us";
  const previousPageName = "about_us";
  const homePageName = "home";
  const homePageLink = "/";
  const twoButtons = true;

  const array = [...data.chocolates];

  return (
    <div>
      <ScrollToTop />
      <nameContext.Provider
        value={{
          currentPageName,
          previousPageLink,
          previousPageName,
          homePageName,
          homePageLink,
          twoButtons,
        }}
      >
        <NameOfPageContainer />
      </nameContext.Provider>
      <Gallery data={array} />
      <BackToTopButton />
    </div>
  );
};

export default GalleryChocolate;
