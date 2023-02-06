//Hooks
import { Splide, SplideSlide } from "@splidejs/react-splide";

// CSS
import "./OurClients.css";
import "@splidejs/react-splide/css/sea-green";

const BrandsSwiper = (props) => {
  return (
    <Splide
      options={{
        rewind: true,
        gap: 2,
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        pagination: false,
        arrows: false,
        pauseOnHover: false,
        resetProgress: false,
        perPage: 3,
        breakpoints: {
          660: {
            perPage: 1,
          },
        }
      }}
    >
      {props.logo.map((logo) => {
        return (
          <SplideSlide className="clients-slides" key={logo}>
            <img src={logo} className="clients-logo" alt="photo" />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default BrandsSwiper;
