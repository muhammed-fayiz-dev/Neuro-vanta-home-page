"use client"

import Image from "next/image"

import { Variants ,motion} from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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
};
interface ChoiceCardProps {
  icon: string
  title: string
  description?: string
}

export function ChoiceCard({ icon, title, description }: ChoiceCardProps) {
  return (
    <motion.article
      className="
    group
    flex
    min-h-105
    flex-col
    border-r border-white/50
    px-10
    py-10
    transition-all
    duration-300
    hover:bg-[#c4aa8d]
  "
    >
      {/* Icon */}
      <div className="h-24 flex items-start">
        <Image
          src={icon}
          alt={title}
          width={70}
          height={70}
          className="
          w-10 h-10 md:w-12.5 md:h-12.5 lg:w-17.5 lg:h-17.5
            transition-all
            duration-300
            group-hover:brightness-0
            group-hover:invert
        "
        />
      </div>

      {/* Content */}
      <div className="mt-24">
        <h3
          className="
        text-30
        font-light
        leading-tight
        text-dark
        transition-colors
        duration-300
        group-hover:text-white
    "
        >
          {title}
        </h3>

        {description && (
          <p className="mt-4 text-19 leading-7 text-neutral-600 transition-colors duration-300 group-hover:text-white/90">
            {description}
          </p>
        )}
      </div>
    </motion.article>
  )
}
