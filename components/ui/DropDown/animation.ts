import { Variants } from "framer-motion"

export const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: {
      when: "afterChildren",
      staggerDirection: -1,
    },
  },

  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
}

export const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: -6,
  },

  open: {
    opacity: 1,
    y: 0,
  },
}