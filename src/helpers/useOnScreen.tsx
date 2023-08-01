/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useOnScreen = (ref: any) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      {rootMargin: "0px 0px 500px 0px"}
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, [])

  return isIntersecting;
}

export default useOnScreen;