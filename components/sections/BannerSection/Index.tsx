"use client"
import Image from "next/image"
import { FC } from "react"
import BannerFeature from "./components/BannerFeatures"
import Button from "@/components/ui/Button/Button"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
interface BannerProps {
  title: string
  description: string
  features: {
    id: string
    title: string
    image: string
  }[]
}

const Banner: FC<BannerProps> = ({ title, description, features }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [activeIndex,features.length])
  return (
    <section className="sticky top-0 h-screen overflow-hidden">
 
      <AnimatePresence mode="sync">
        <motion.div
          key={features[activeIndex].image}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.9,
          }}
          className="absolute inset-0"
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

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-10 lg:px-16 lg:py-14">
        {/* Top Section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div className="max-w-2xl">
            <h1 className="text-section font-light uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-lg text-19 leading-7 text-white/80">
              {description}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end gap-3">
            <Button>EXPLORE</Button>

            <Button>VIEW PRODUCTS</Button>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid gap-8  pt-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <BannerFeature
              key={feature.id}
              id={feature.id}
              title={feature.title}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner
