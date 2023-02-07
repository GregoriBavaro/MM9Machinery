import { motion as m } from "framer-motion";

const Galleries = (props) => {
  return (
    <m.div key={props.index} className="wrapper-images">
      <m.img
        className="image-container__closed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        src={props.item.link}
        alt={props.item.text}
        onClick={() => props.handleClick(props.item, props.index)}
      />
    </m.div>
  );
};

export default Galleries;
