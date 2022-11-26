import { useEffect, useState } from "react";
import useEventListener from "./useEventListener";

export default function useWindowSize() {
  const [windowsize, setWindowsize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowsize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEventListener("resize", () => {
    setWindowsize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return windowsize;
}