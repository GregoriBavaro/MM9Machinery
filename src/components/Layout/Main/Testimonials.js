//Hooks
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";

//CSS
import "./Testimonials.css";
import "swiper/css";
import "@splidejs/react-splide/css/sea-green";

//Data
import { TestimonialsItems } from "../../../Data/TestimonialsItems";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div className="testimonials-container">
      <h1>{t("testimonials_header")}</h1>
      <Splide
        className="swiper-testimonials"
        options={{
          rewind: true,
          width: 800,
          gap: "1rem",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          pagination: false,
        }}
      >
        {TestimonialsItems.map(({ from, testimonial, index }) => {
          return (
            <SplideSlide key={index}>
              <div className="swiper-slide-testimonials">
                <p>{testimonial}</p>
                <h3>{from}</h3>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Testimonials;
