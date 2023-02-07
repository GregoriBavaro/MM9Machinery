//Hooks
import { Splide, SplideSlide } from "@splidejs/react-splide";

//CSS
import "./Testimonials.css";
import "swiper/css";
import '@splidejs/react-splide/css/sea-green';

//Data
import { TestimonialsItems } from "../../../Data/TestimonialsItems";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1>What our customers say</h1>
       <Splide className="swiper-testimonials"
          options={{
            rewind: true,
            width: 800,
            gap: "1rem",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            pagination: false
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
