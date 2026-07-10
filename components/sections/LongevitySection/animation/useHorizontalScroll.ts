"use client"

import { useLayoutEffect, useState } from "react"
import { useScroll, useSpring, useTransform } from "framer-motion"

export function useHorizontalScroll(
  target: React.RefObject<HTMLElement | null>,
  track: React.RefObject<HTMLElement | null>
) {
  const [distance, setDistance] = useState(0)

  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  })

  useLayoutEffect(() => {
    const trackElement = track.current
    const viewportElement = trackElement?.parentElement

    if (!trackElement || !viewportElement) {
      return
    }

    const updateDistance = () => {
      setDistance(
        Math.max(0, trackElement.scrollWidth - viewportElement.clientWidth)
      )
    }

    updateDistance()

    const resizeObserver = new ResizeObserver(updateDistance)
    resizeObserver.observe(trackElement)
    resizeObserver.observe(viewportElement)

    return () => {
      resizeObserver.disconnect()
    }
  }, [track])

  const x =
useTransform(
scrollYProgress,
[0,1],
[0,-distance]
)
  const smoothX = useSpring(x, {
    stiffness: 90,
    damping: 25,
  })
  return { x:smoothX }
}
