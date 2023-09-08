import { useEffect, useState } from "react";

const MouseCoordFetcher = ({ render }) => {
  const [mouseCoord, setMouseCoord] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMouseCoord({ ...mouseCoord, x: event.clientX, y: event.clientY });
    });
  }, []);
  return render({ mouseCoord });
};

export default MouseCoordFetcher;
