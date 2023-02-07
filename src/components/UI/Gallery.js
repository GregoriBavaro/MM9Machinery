//Hook
import { AnimatePresence} from "framer-motion";
import useLightBox from "../Hooks/use-lightBox";

//CSS
import "./Gallery.css";

//Component
import Modal from "../UI/Modal";
import Galleries from "../UI/Galleries";

const Gallery = (props) => {
  const data = [...props.data];

  const {
    handelRotationLeft,
    handelRotationRight,
    handleClick,
    clickedImg,
    setClickedImg,
  } = useLightBox(data);

  return (
    <div className="gallery-container">
      <div className="wrapper">
        {data.map((item, index) => (
          <Galleries
            key={index}
            index={index}
            item={item}
            handleClick={handleClick}
          />
        ))}
        <AnimatePresence>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
