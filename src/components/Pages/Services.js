//Hooks
import { useState } from 'react'
import { nameContext } from "../Hooks/Context";
import { motion as m } from "framer-motion";

//Components
import NameOfPageContainer from "../UI/NameOfPageContainer";
import IconContainer from "../Layout/Main/IconsContainer";




const Services = () => {
  const [name, setName] = useState("services");
  const [link, setLink] = useState("/");
  const [backName, setBackName] = useState("home");
  return (
    <m.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
      exit={{x: window.innerWidth, transition: {duration: 0.1}  }}
    >
      <nameContext.Provider value={{ name, link, backName }}>
        <NameOfPageContainer />
      </nameContext.Provider>
      <IconContainer />
    </m.div>
  );
};

export default Services;
