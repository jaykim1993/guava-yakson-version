import { useEffect, useState } from "react";

export function useScrollHeader(threshold = 40, onScrollStart) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > threshold;
      setScrolled(isScrolled);

      if (isScrolled && onScrollStart) {
        onScrollStart();
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, onScrollStart]);

  return scrolled;
}