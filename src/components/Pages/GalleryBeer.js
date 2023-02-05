//Hooks
import { nameContext } from "../Hooks/Context";
import { useState } from "react";
import ScrollToTop from "../Helpers/ScrollToTop";

//Components
import Gallery from "../UI/Gallery";
import NameOfPageContainer from "../UI/NameOfPageContainer";

//Data
import data from "../../Data/images.json";

const GalleryBeer = () => {
  const array = [...data.beer];

  const [name, setName] = useState("gallery_beer");
  const [link, setLink] = useState("/about-us");
  const [backName, setBackName] = useState("about_us");

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

export default GalleryBeer;
