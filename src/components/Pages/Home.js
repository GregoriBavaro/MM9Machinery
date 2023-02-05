//Hooks
import { motion as m } from "framer-motion";

//Components
import Main from "../Layout/Main/Main";
import Hero from "../Layout/Main/Hero";


const Home = () => {
  return (
    <m.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
      exit={{x: window.innerWidth, transition: {duration: 0.1}  }}
    >
      <Hero />
      <Main />
    </m.div>
  );
};

export default Home;
