"use client"

import { AnimatePresence, motion } from "framer-motion"
import DropdownItem from "./DropdownItem"
import { menuVariants } from "./animation" 
import { DropdownProps } from "./type" 

interface DropdownMenuProps<T> extends DropdownProps<T> {
  isOpen: boolean
  onClose: () => void
}

export default function DropdownMenu<T>({
  items,
  value,
  onChange,
  getLabel,
  isOpen,
  onClose,
}: DropdownMenuProps<T>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="
            absolute
            left-0
            right-0
            top-full
            z-50
            mt-2
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-neutral-900
            shadow-2xl
          "
        >
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              label={getLabel(item)}
              active={value === index}
              onClick={() => {
                onChange(index)
                onClose()
              }}
            />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}