import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
   const time = setTimeout(() => {
      window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
    },600)
    return () => {
      clearTimeout(time);
    }
  }, [pathname]);

  return null;
}