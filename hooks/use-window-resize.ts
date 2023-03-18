import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [windowDimension, setWindowDimension] = useState({
    winWidth: 1200,
    winHeight: 800,
  });

  const detectSize = () => {
    setWindowDimension({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    //dispatch detectSize fn on window resize
    window.addEventListener("resize", detectSize);
    //removing prev listner to prevent memory leak
    return () => window.removeEventListener("resize", detectSize);
  }, [windowDimension]);

  return windowDimension;
};

export default useWindowResize;
