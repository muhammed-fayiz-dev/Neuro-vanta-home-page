"use client"

import Image from "next/image"
import { FC, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { DesktopBanner } from "./components/DesktopBanner"

interface BannerProps {
  title: string
  description: string
  features: {
    id: string
    title: string
    image: string
  }[]
  descriptionMax_w: string
}

const Banner: FC<BannerProps> = ({
  title,
  description,
  features,
  descriptionMax_w,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section className="relative h-screen overflow-hidden bg-black">

      <AnimatePresence mode="wait">
        <motion.div
          key={features[activeIndex].image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="container h-full">
          <DesktopBanner
            title={title}
            description={description}
            features={features}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            descriptionMax_w={descriptionMax_w}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
