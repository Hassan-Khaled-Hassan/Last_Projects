import { useState, useRef, useEffect } from "react";
const MyHeadLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const spanRef = useRef(null);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        spanRef.current &&
        !spanRef.current.contains(event.target)
      ) {
        closeNavbar();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleSpanClick = (event) => {
    setIsOpen(!isOpen);
    event.stopPropagation(); // Prevent event propagation to the window click listener
  };
  return [isOpen, navRef, spanRef, handleSpanClick];
};

export default MyHeadLogic;
