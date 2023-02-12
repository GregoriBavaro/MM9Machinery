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
        perPage: 3,
        breakpoints: {
          660: {
            perPage: 1,
          },
        }
      }}
    >
      {props.logo.map((partners, index) => {
        return (
          <SplideSlide className="clients-slides" key={index}>
            <img src={partners.link} className="clients-logo" alt="partner logo" />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default BrandsSwiper;
