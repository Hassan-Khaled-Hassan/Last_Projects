import { useState } from "react";
const MyLogic = () => {
  const [Mobile, setMobile] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });
  const handleChange = () => {
    console.log("Button clicked");
    window.scrollBy({
      top: 4000,
      behavior: "smooth",
    });
  };
  return [Mobile, handleChange];
};

export default MyLogic;
