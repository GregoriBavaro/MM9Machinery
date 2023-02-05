//Hooks
import { nameContext } from "../Hooks/Context";
import { useState } from "react";

//Components
import Gallery from "../UI/Gallery";
import NameOfPageContainer from "../UI/NameOfPageContainer";
import ScrollToTop from "../Helpers/ScrollToTop";

//Data
import data from "../../Data/images.json";

const GalleryChocolate = () => {
  const [name, setName] = useState("gallery_one");
  const [link, setLink] = useState("/about-us");
  const [backName, setBackName] = useState("about_us");

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
