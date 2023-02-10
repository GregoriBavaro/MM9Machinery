//Hooks
import { motion as m } from "framer-motion";

//Components
import Main from "../Layout/Main/Main";
import Hero from "../Layout/Main/Hero";
import BackToTopButton from "../UI/BackToTopButton";


const Home = () => {
  return (
    <m.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
    >
      <Hero />
      <Main />
      <BackToTopButton />
    </m.div>
  );
};

export default Home;
