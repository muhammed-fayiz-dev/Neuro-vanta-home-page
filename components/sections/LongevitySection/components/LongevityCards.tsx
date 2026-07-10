"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import LongevityCard from "./Card"
import longevityCardData from "../LongevityData/longevityCardData"
import { useHorizontalScroll } from "../animation/useHorizontalScroll"

interface LongevityCardsProps {
  scrollTargetRef: React.RefObject<HTMLElement | null>
}

export default function LongevityCards({
  scrollTargetRef,
}: LongevityCardsProps) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const { x } = useHorizontalScroll(scrollTargetRef, trackRef)

  return (
    <div className="overflow-hidden">
      <motion.div ref={trackRef} style={{ x }} className="flex gap-8">
        {longevityCardData.map((card) => (
          <LongevityCard
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
          />
        ))}
      </motion.div>
    </div>
  )
}
