import React, { useRef } from "react";

const useScroll = () => {
  const elRef = useRef(null);
  const executeScroll = () =>
    elRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  //const executeScroll = () => window.scrollTo(0, elRef.current.offsetTop);
  return [executeScroll, elRef];
};

export default useScroll;