import { useEffect, useState } from "react";

const useMousePosition = (): { x: number; y: number } => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount and cleans up on unmount

  return mousePosition;
};

export default useMousePosition;
