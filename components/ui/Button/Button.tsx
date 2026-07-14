"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const MotionImage = motion.create(Image);

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  size?: "sm" | "md";
  theme?: "light" | "dark";
}

export default function Button({
  children,
  size = "sm",
  theme = "light",
  className = "",
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`
        relative
        w-fit      
        overflow-hidden
        flex
        items-center
        rounded-full
        border

        ${
          theme === "light"
            ? "border-secondary text-secondary hover:bg-primary hover:text-extra-dark"
            : "border-extra-dark bg-dark text-white hover:bg-primary hover:text-extra-dark"
        }

        ${
          size === "sm"
            ? "h-12 px-4"
            : "h-14 px-5"
        }

        ${className}
      `}
      {...props}
    >
      {/* Left Icon: hidden at idle, slides in from the left on hover */}
      <motion.div
        className="absolute left-2"
        animate={{
          x: hovered ? 0 : -40,
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
      >
        <MotionImage
          src="/icon/circle-arrow-right.svg"
          alt=""
          width={40}
          height={40}
        />
      </motion.div>

      {/* Text */}
      <motion.span
        animate={{
          x: hovered ? 18 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="mx-12 uppercase whitespace-nowrap text-button"
      >
        {children}
      </motion.span>

      {/* Right Icon: visible at idle, exits to the right and fades on hover */}
      <motion.div
        className="absolute right-2"
        animate={{
          x: hovered ? 40 : 0,
          opacity: hovered ? 0 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
      >
        <MotionImage
          src="/icon/circle-arrow-right.svg"
          alt=""
          width={40}
          height={40}
        />
      </motion.div>
    </motion.button>
  );
}