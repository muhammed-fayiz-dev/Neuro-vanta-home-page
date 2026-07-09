"use client";

import { useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useHorizontalScroll(
  target: React.RefObject<HTMLElement | null>,
  track: React.RefObject<HTMLElement | null>,
) {
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const trackElement = track.current;
    const viewportElement = trackElement?.parentElement;

    if (!trackElement || !viewportElement) {
      return;
    }

    const updateDistance = () => {
      setDistance(
        Math.max(0, trackElement.scrollWidth - viewportElement.clientWidth),
      );
    };

    updateDistance();

    const resizeObserver = new ResizeObserver(updateDistance);
    resizeObserver.observe(trackElement);
    resizeObserver.observe(viewportElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [track]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return { x };
}
