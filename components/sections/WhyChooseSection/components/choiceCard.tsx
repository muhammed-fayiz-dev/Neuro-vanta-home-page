"use client"

import Image from "next/image"

import { Variants, motion } from "framer-motion"


export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}
interface ChoiceCardProps {
  icon: string
  title: string
  description?: string
  active?: boolean
  onHoverStart?: () => void
  onHoverEnd?: () => void
}

export function ChoiceCard({
  icon,
  title,
  description,
  active,
  onHoverStart,
  onHoverEnd,
}: ChoiceCardProps) {
  return (
    <motion.article
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={`
    group
    relative
    flex
    min-h-105
    flex-col
    border-r border-white/50
    px-10
    py-10
    transition-all
    duration-300
    
    ${active ? "bg-[#c4aa8d]" : "bg-secondary"}
    
  `}
    >
      {/* Icon */}
      <div
        className="h-16 md:h-24 flex items-start
      "
      >
        <Image
          src={icon}
          alt={title}
          width={70}
          height={70}
          className={`
          w-10 h-10 md:w-12.5 md:h-12.5 lg:w-17.5 lg:h-17.5
          transition-all
          duration-300
          ${active ? "brightness-0 invert" : ""}
      `}
        />
      </div>

      {/* Content */}
      <div
        className={`
      mt-6
  md:mt-auto
  transition-transform
  duration-500
  ease-out
      
      ${active ? "md:-translate-y-10 text-white/70" : "text-extra-dark"}
    `}
      >
        <h3 className= "text-30">{title}</h3>

        {description && (
          <p
            className={`
              text-19
          // mt-2
    max-h-full
opacity-100
translate-y-0
    overflow-hidden

   md:max-h-0
md:opacity-0
md:translate-y-8
    transition
    duration-500
    ease-out
    ${active ? "md:max-h-40 md:opacity-100 md:translate-y-0 md:transition-1 text-white/90" : ""}

        `}
          >
            {description}
          </p>
        )}
      </div>
    </motion.article>
  )
}
