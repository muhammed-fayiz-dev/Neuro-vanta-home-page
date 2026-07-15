"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface DropdownButtonProps {
  label: string
  isOpen: boolean
  onToggle: () => void
}

export default function DropdownButton({
  label,
  isOpen,
  onToggle,
}: DropdownButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="
        flex
        w-full
        items-center
        justify-between
        border-b
        border-white/20
        py-4
        text-left
        text-white
      "
    >
      <span className="text-18 font-medium">
        {label}
      </span>

      <motion.div
        animate={{
          rotate: isOpen ? 180 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </button>
  )
}