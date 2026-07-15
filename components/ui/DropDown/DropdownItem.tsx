"use client"

import { motion } from "framer-motion"
import { itemVariants } from "./animation" 

interface DropdownItemProps {
  label: string
  active: boolean
  onClick: () => void
}

export default function DropdownItem({
  label,
  active,
  onClick,
}: DropdownItemProps) {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{
        x: 8,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className={`
        cursor-pointer
        border-b
        border-white/10
        px-5
        py-4
        transition-colors
        duration-300

        ${
          active
            ? "bg-white text-black"
            : "bg-transparent text-white hover:bg-white/10"
        }
      `}
    >
      {label}
    </motion.li>
  )
}