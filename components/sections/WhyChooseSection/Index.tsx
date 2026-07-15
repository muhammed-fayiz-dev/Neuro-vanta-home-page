"use client"

import Section from "@/components/layout/SectionLayout"
import { choiceData } from "./data/choiceData"
import { ChoiceCard } from "./components/choiceCard"
import { motion, Variants } from "framer-motion"
import RevealItem from "@/components/animations/RevealItem"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useEffect, useState } from "react"

export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}
const WhyChooseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % choiceData.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered])
  return (
    <Section className="bg-secondary h-sreen pb-0">
      <RevealItem
        trigger="viewport"
        className="mb-12 text-section font-light uppercase text-extra-dark"
      >
        WHY NEURO VANTA
      </RevealItem>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="border-t border-white"
      >
        <Swiper
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex)
          }}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {choiceData.map((choice, index) => (
            <SwiperSlide key={choice.title} className="h-auto">
              <RevealItem trigger="viewport">
                <ChoiceCard
                  icon={choice.icon}
                  title={choice.title}
                  description={choice.description}
                  active={index === activeIndex}
                  onHoverStart={() => {
                    setIsHovered(true)
                    setActiveIndex(index)
                  }}
                  onHoverEnd={()=> setIsHovered(false)}
                />
              </RevealItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </Section>
  )
}

export default WhyChooseSection
