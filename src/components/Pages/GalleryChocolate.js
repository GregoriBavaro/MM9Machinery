//Hooks
import { nameContext } from "../Hooks/Context";

//Components
import Gallery from "../UI/Gallery";
import NameOfPageContainer from "../UI/NameOfPageContainer";
import ScrollToTop from "../Helpers/ScrollToTop";

//Data
import data from "../../Data/images.json";

const GalleryChocolate = () => {
  const name = "gallery_one";
  const link = "/about-us";
  const backName = "about_us";

  const array = [...data.chocolates];

  return (
    <div>
      <ScrollToTop />
      <nameContext.Provider value={{ name, link, backName }}>
        <NameOfPageContainer />
      </nameContext.Provider>
      <Gallery data={array} />
    </div>
  );
};

export default GalleryChocolate;
