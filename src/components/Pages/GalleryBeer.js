//Hooks
import { nameContext } from "../Hooks/Context";
import ScrollToTop from "../Helpers/ScrollToTop";

//Components
import Gallery from "../UI/Gallery";
import NameOfPageContainer from "../UI/NameOfPageContainer";
import BackToTopButton from "../UI/BackToTopButton";

//Data
import data from "../../Data/images.json";

const GalleryBeer = () => {
  const array = [...data.beer];

  const name = "gallery_beer";
  const link = "/about-us";
  const backName = "about_us";

  return (
    <div>
      <ScrollToTop />
      <nameContext.Provider value={{ name, link, backName }}>
        <NameOfPageContainer />
      </nameContext.Provider>
      <Gallery data={array} />
      <BackToTopButton />
    </div>
  );
};

export default GalleryBeer;
