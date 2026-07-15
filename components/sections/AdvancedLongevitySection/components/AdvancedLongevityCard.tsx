"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { card } from "../data/advancedLongevityData"

const rowVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.015,

    transition: {
      type: "spring" as const,
      stiffness: 320,
      damping: 30,
    },
  },
}

const overlayVariants = {
  rest: {
    scaleX: 0,
    originX: 0,
  },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}
const titleVariants = {
  rest: {
    color: "#1d1d1d",
    x: 0,
  },
  hover: {
    color: "#111111",
    x: 8,
    transition: {
      type: "spring" as const,
      duration: 0.35,
    },
  },
}

const valueVariants = {
  rest: {
    color: "#1d1d1d",
  },
  hover: {
    color: "#111111",
    transition: {
      type: "spring" as const,
      duration: 0.35,
    },
  },
}

const iconVariants:Variants  = {
  rest: {
    opacity: 0,
    x: 20,
    scale: 0.5,
  },
  hover: {
    opacity: 1,
    x: 0,
    scale: 1.3,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

export const AdvancedLongevityCard = () => {
  return (
    <div className="w-full lg:w-3/5">
      {card.map((item) => (
     
          <motion.div
           key={item.value}
            layout
            initial="rest"
            animate="rest"
            whileHover="hover"
            variants={rowVariants}
            transition={{
              layout: {
                type: "spring",
                stiffness: 400,
                damping: 35,
              },
            }}
            className="group relative overflow-hidden border-t border-neutral-300 bg-primary px-4 py-6 md:px-6"
          >
            {/* Background Reveal */}
            <motion.div
              variants={overlayVariants}
              className="absolute inset-0 origin-left bg-secondary"
            />

            {/* Content */}
            <div className="relative z-10 grid grid-cols-[80px_1fr_40px] items-center gap-6">
              {/* Number */}
              <motion.div
                variants={valueVariants}
                className="w-fit text-section font-light text-extra-dark"
              >
                {item.value}
              </motion.div>

              {/* Title */}
              <motion.p
                variants={titleVariants}
                className="flex-1 text-30 text-extra-dark"
              >
                {item.title}
              </motion.p>

              {/* Icon */}
              <motion.div
                variants={iconVariants }
                className="flex w-8 justify-end"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={42}
                  height={40}
                  className="md:w-72px md:h-70px"

                />
              </motion.div>
            </div>
          </motion.div>
       
      ))}
    </div>
  )
}
