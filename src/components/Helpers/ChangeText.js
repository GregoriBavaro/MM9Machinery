//Hooks
import { Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ChangeText = (props) => {
  return (
    <Swiper
      className={props.swiperClass}
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={30}
      direction={"vertical"}
      speed={800}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {props.text.map((text) => {
        return (
          <SwiperSlide key={text} className={props.swiperSlidesClass}>
            <h3>{text}</h3>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ChangeText;
