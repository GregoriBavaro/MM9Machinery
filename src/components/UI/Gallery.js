//Hook
import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { useSwipeable } from "react-swipeable";

//CSS
import "./Gallery.css";

//Component
import Modal from "../UI/Modal";

const Gallery = (props) => {
  const data = [...props.data];

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showDiv, setShowDIv] = useState(false);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

 

  return (
    <div className="gallery-container">
      <div className="wrapper">
        {data.map((item, index) => (
          <m.div key={index} className="wrapper-images">
            <m.img
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, index)}
            />
          </m.div>
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
