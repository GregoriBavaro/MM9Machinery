//Hooks
import { nameContext } from "../Hooks/Context";
import ScrollToTop from "../Helpers/ScrollToTop";

//Components
import Gallery from "../UI/Gallery";
import NameOfPageContainer from "../UI/NameOfPageContainer";
import BackToTopButton from "../UI/BackToTopButton";

//Data
import data from "../../Data/images.json";

const GalleryBottles = () => {
  const array = [...data.bottles];

  const currentPageName = "gallery_bottles";
  const previousPageLink = "/services";
  const previousPageName = "services";
  const homePageName = "home";
  const homePageLink = "/";
  const twoButtons = true;

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

export default GalleryBottles;