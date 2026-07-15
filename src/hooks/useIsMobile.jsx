import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const getSize = () => {
    const width = window.innerWidth;

    return {
      isBelow1920: width < 1920,
      isBelow1440: width < 1440,
      isBelow1280: width < 1280,
      isAbove1280: width > 1280,
      isBelow1024: width < 1024,
      isAbove1024: width > 1024,
      isBelow768: width < 768,
      isAbove640: width > 640,
      isBelow640: width < 640,
      isBelow480: width < 480,
    };
  };

  const [screen, setScreen] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setScreen(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
};