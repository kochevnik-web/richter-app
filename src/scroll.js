import React, { useRef } from "react";

const useScroll = () => {
  const elRef = useRef(null);
  // const executeScroll = () =>
  //   elRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start"
  //   });
  const executeScroll = () => window.scrollTo({top: elRef.current.offsetTop, behavior: 'smooth'});
  return [executeScroll, elRef];
};

export default useScroll;