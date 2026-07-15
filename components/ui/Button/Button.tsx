"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
  theme?: "light" | "dark"
}

const BUTTON = {
  mobile: {
    height: 40,
    icon: 40,
    padding: 16,
  },
  tablet: {
    height: 44,
    icon: 44,
    padding: 18,
  },
  desktop: {
    height: 48,
    icon: 48,
    padding: 20,
  },
}

export default function Button({
  children,
  theme = "light",
  className = "",
  ...props
}: ButtonProps) {
  const [active, setActive] = useState(false)
  const [buttonWidth, setButtonWidth] = useState(0)
const [iconWidth, setIconWidth] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
   setButtonWidth(buttonRef.current?.offsetWidth as number)
  }, [])

  useEffect(() => {
    setIconWidth(iconRef.current?.offsetWidth as number)
}, [])
const travelDistance = buttonWidth - iconWidth
  return (
    <motion.button
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onTapStart={() => setActive(true)}
      onTapCancel={() => setActive(false)}
      onTap={() => {
        setTimeout(() => setActive(false), 300)
      }}
      ref={buttonRef}
      className={`
        relative
        inline-flex
        h-10
        sm:h-11
        lg:h-12
        items-center
        overflow-hidden
        rounded-full
        border
        w-fit

        ${
          theme === "light"
            ? "border-secondary text-secondary"
            : "border-white text-white"
        }

        ${className}
      `}
      {...props}
    >
      {/* Background Fill */}
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full bg-primary"
        initial={{ width: 40 }}
        animate={{
          width: active ? "100%" : 40,
        }}
        transition={{
          duration: 0.45,
          ease: [0.4, 0, 0.2, 1],
        }}
      />

      {/* Moving Icon */}
      <motion.div
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2"
        animate={{
          left: active ? travelDistance : 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <motion.div
           ref={iconRef}
          className={`
            flex
            h-10 w-10
            sm:h-11 sm:w-11
            lg:h-12 lg:w-12
         
            items-center
            justify-center
            rounded-full
           
            ${active ? "bg-extra-dark":"bg-secondary" }
          `}
          animate={{
            rotate: active ? 0 : 0,
          }}
        >
          <ChevronRight
            className={`h-4 w-4 md:h-7 md:w-7  ${active ? " text-secondary":"text-extra-dark" }`}
            strokeWidth={2}
            // color="#3F3A35"
          />
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.span
        className="
          relative
          z-10
          pl-11
          pr-4
          sm:pl-12
          sm:pr-5
          lg:pl-14
          lg:pr-6
          whitespace-nowrap
          uppercase
          text-button
        "
        animate={{
          x: active ? -30 : 0,
          color:
            theme === "light" ? (active ? "#1B1B1B" : "#E9D9C6") : "#FFFFFF",
        }}
        transition={{
          duration: 0.45,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  )
}
