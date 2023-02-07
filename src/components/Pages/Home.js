//Hooks
import { motion as m } from "framer-motion";

//Components
import Main from "../Layout/Main/Main";
import Hero from "../Layout/Main/Hero";
import BackToTopButton from "../UI/BackToTopButton";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <Main />
      <BackToTopButton />
    </m.div>
    
  );
};

export default Home;
