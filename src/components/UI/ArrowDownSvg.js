import { motion as m } from "framer-motion";

const ArrowDownSvg = (props) => {
  return (
    <m.svg
      animate={{ rotate: props.dropDown ? 180 : 0 }}
      fill="#00bf6f"
        width="30px"
        height="30px"
        viewBox="-672 -672 3264.00 3264.00"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#00bf6f"
        strokeWidth="69.11999999999999"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#CCCCCC"
          strokeWidth="23.04"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="m.153 526.146 92.168-92.299 867.767 867.636 867.636-867.636 92.429 92.299-960.065 959.935z"
            fillRule="evenodd"
          ></path>{" "}
        </g>
      
    </m.svg>
  );
};

export default ArrowDownSvg;
