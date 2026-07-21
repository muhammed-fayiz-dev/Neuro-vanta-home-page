"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { card } from "../data/advancedLongevityData"

const spring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 28,
}

const rowVariants: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.015,
    transition: spring,
  },
}

const overlayVariants: Variants = {
  rest: {
    scaleX: 0,
    originX: 0,
  },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
const contentVariants = {
  rest: {
    x: 0,
  },
  hover: {
    x: 18,
    transition: spring,
  },
}

const iconVariants = {
  rest: {
    opacity: 0,
    x: 30,
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: spring,
  },
}

export default function AdvancedLongevityCard() {
  return (
    <div className="flex flex-col lg:flex-1 w-full max-w-[1136px] relative">
      {card.map((item) => (
        <motion.article
          key={item.value}
          initial="rest"
          animate="rest"
          whileHover="hover"
          variants={rowVariants}
          className="relative"
        >
          {/* Border */}
          <div className="h-px w-full bg-neutral-300" />

          {/* Row */}
          <div
            className="
      relative
      flex
      h-[82px]
      sm:h-auto
      hover:px-20
      hover:sm:px-60
      py-[24px]
      sm:py-40
      transition-all
      duration-300
      ease-in-out
    "
          >
            {/* Hover Background */}
            <motion.div
              variants={overlayVariants}
              className="
        absolute
        inset-0
        bg-secondary
        origin-left
      "
            />

            {/* Content */}
            <motion.div
              variants={contentVariants}
              className="
        relative
        z-10
        flex
        items-center
        w-full
        sm:min-h-[60px]
        md:min-h-[70px]

        gap-[30px]
        md:gap-[50px]
        2xl:gap-0
      "
            >
              {/* Number */}
              <span
                className="
          shrink-0
          sm:min-w-[94px]
          3xl:min-w-[104px]
          text-section
          text-extra-dark
        "
              >
                {item.value}
              </span>

              {/* Title */}
              <h3
                className="
          flex-1
          text-30
          tracking-[-0.03em]
          text-extra-dark

          lg:pl-80
          xl:pl-160
          2xl:pl-[220px]
          3xl:pl-[347px]
        "
              >
                {item.title}
              </h3>

              {/* Icon */}
              <motion.div
                variants={iconVariants}
                className="
          flex
          justify-end
          shrink-0
          w-[72px]
        "
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={72}
                  height={70}
                  className="w-[42px] h-[40px] md:w-[52px] md:h-[50px] xl:w-[72px] xl:h-[70px] object-contain"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Last Border */}
          {item === card[card.length - 1] && (
            <div className="h-px w-full bg-neutral-300" />
          )}
        </motion.article>
      ))}
    </div>
  )
}
